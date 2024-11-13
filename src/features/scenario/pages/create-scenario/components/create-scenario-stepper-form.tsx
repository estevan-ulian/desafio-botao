"use client";
import { Step, StepItem } from "@/shared/components/ui/stepper";
import { StepFour } from "./step-four";
import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";
import { StepThree } from "./step-three";
import { StepsCompleted } from "./steps-completed";
import { CreateScenarioFormProvider } from "../providers/create-scenario-form-provider";
import { Check, Drama, HelpCircle, PartyPopper } from "lucide-react";

export function CreateScenarioStepperForm() {
	const steps = [
		{ id: "0", label: "Pergunta", icon: HelpCircle },
		{ id: "1", label: "Respostas", icon: Drama },
		{ id: "2", label: "Confirmação", icon: PartyPopper },
		{ id: "3", label: "Finalização", icon: Check },
	] satisfies StepItem[];

	return (
		<CreateScenarioFormProvider steps={steps}>
			{steps.map((stepProps, index) => {
				switch (index) {
					case 0:
						return (
							<Step key={stepProps.id} {...stepProps}>
								<StepOne />
							</Step>
						);
					case 1:
						return (
							<Step key={stepProps.id} {...stepProps}>
								<StepTwo />
							</Step>
						);
					case 2:
						return (
							<Step key={stepProps.id} {...stepProps}>
								<StepThree />
							</Step>
						);
					case 3:
						return (
							<Step key={stepProps.id} {...stepProps}>
								<StepFour />
							</Step>
						);
					default:
						return null;
				}
			})}
			<StepsCompleted />
		</CreateScenarioFormProvider>
	);
}
