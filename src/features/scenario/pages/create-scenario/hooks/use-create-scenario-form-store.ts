import React from "react";
import {
    CreateScenarioFormContext,
    ICreateScenarioFormData,
} from "../providers/create-scenario-form-provider";
import { useStepper } from "@/shared/components/ui/stepper";
import { createScenarioMapper } from "../utils/create-scenario-mapper";
import { createScenarioAction } from "@/features/scenario/actions/create-scenario-action";
import { IError } from "@/shared/types/error-type";

export function useCreateScenarioFormStore() {
    const ctx = React.useContext(CreateScenarioFormContext);

    if (!ctx)
        throw new Error(
            "useScenarioStore must be used within a ScenarioStoreProvider",
        );

    const { formData, setFormData, scenarioId, setScenarioId } = ctx;

    const [isCreatingScenario, setIsCreatingScenario] = React.useState(false);
    const [isCreatedScenarioSuccessfully, setIsCreatedScenarioSuccessfully] =
        React.useState(false);

    const {
        nextStep,
        prevStep,
        isFirstStep,
        hasCompletedAllSteps,
        isLastStep,
    } = useStepper();

    const next = (data: Partial<ICreateScenarioFormData>) => {
        setFormData((prev) => ({
            ...prev,
            ...data,
        }));
        nextStep();
    };

    const prev = () => {
        setFormData((prev) => ({
            ...prev,
        }));
        prevStep();
    };

    const createScenario = async () => {
        try {
            setIsCreatingScenario(true);
            const body = createScenarioMapper(formData);
            const response = await createScenarioAction(body);
            if (!response.data) throw new Error(response.error?.message);
            setIsCreatedScenarioSuccessfully(true);
            setScenarioId(response.data.id);
            console.log(response.data);
            nextStep();
        } catch (error: unknown) {
            const err = error as IError;
            setIsCreatedScenarioSuccessfully(false);
            throw new Error(err.message);
        } finally {
            setIsCreatingScenario(false);
        }
    };

    return {
        isFirstStep,
        isLastStep,
        hasCompletedAllSteps,
        formData,
        isCreatingScenario,
        isCreatedScenarioSuccessfully,
        scenarioId,
        next,
        prev,
        createScenario,
    };
}
