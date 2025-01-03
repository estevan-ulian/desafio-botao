"use client";
import React from "react";
import { FormStepOneData } from "../components/step-one/hooks/use-form-step-one";
import { FormStepTwoData } from "../components/step-two/hooks/use-form-step-two";
import { FormStepThreeData } from "../components/step-three/hooks/use-form-step-three";
import { StepItem, Stepper } from "@/shared/components/ui/stepper";

export interface ICreateScenarioFormData {
    question: FormStepOneData["data"]["question"];
    answers: FormStepTwoData["data"]["answers"];
    confirmation: {
        confirmationType: FormStepThreeData["data"]["confirmation"]["confirmationType"];
        confirmationContent: FormStepThreeData["data"]["confirmation"]["confirmationContent"];
    };
}

interface ICreateScenarioFormContextProps {
    formData: ICreateScenarioFormData;
    setFormData: React.Dispatch<React.SetStateAction<ICreateScenarioFormData>>;
    scenarioId: string | undefined;
    setScenarioId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const formDataInitialState: ICreateScenarioFormData = {
    question: "",
    answers: {
        firstAnswer: "",
        secondAnswer: "",
        isNotClickable: "",
    },
    confirmation: {
        confirmationType: "",
        confirmationContent: "",
    },
};

export const CreateScenarioFormContext =
    React.createContext<ICreateScenarioFormContextProps>({
        formData: formDataInitialState,
        setFormData: () => {},
        scenarioId: undefined,
        setScenarioId: () => {},
    });

interface PropsWithSteps {
    steps: StepItem[];
}
export function CreateScenarioFormProvider({
    steps,
    children,
}: React.PropsWithChildren<PropsWithSteps>) {
    const [formData, setFormData] =
        React.useState<ICreateScenarioFormData>(formDataInitialState);
    const [scenarioId, setScenarioId] = React.useState<string | undefined>(
        undefined
    );

    const store: ICreateScenarioFormContextProps = {
        formData,
        setFormData,
        scenarioId,
        setScenarioId,
    };

    return (
        <CreateScenarioFormContext.Provider value={store}>
            <Stepper initialStep={0} steps={steps}>
                {children}
            </Stepper>
        </CreateScenarioFormContext.Provider>
    );
}
