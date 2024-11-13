import type { ICreateScenarioBody } from "@/features/scenario/types/scenario-type";
import type { ICreateScenarioFormData } from "../providers/create-scenario-form-provider";

export function createScenarioMapper(
	data: ICreateScenarioFormData,
): ICreateScenarioBody {
	return {
		data: {
			question: data.question,
			answers: [
				{
					text: data.answers.firstAnswer,
					isNotClickable: data.answers.isNotClickable === "firstAnswer",
				},
				{
					text: data.answers.secondAnswer,
					isNotClickable: data.answers.isNotClickable === "secondAnswer",
				},
			],
			confirmationType: data.confirmation.confirmationType,
			confirmationContent: data.confirmation.confirmationContent,
		},
	};
}
