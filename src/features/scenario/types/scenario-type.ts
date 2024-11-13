import { Prisma } from "@prisma/client";

interface IAnswer {
	id?: string;
	text: string;
	isNotClickable: boolean;
}

interface IScenarioData {
	id?: string;
	question: string;
	confirmationType: string;
	confirmationContent: string;
	answers: IAnswer[];
}

export interface ICreateScenarioBody {
	data: IScenarioData;
}

const scenarioWithAnswers = Prisma.validator<Prisma.ScenarioDefaultArgs>()({
	include: {
		answers: true,
	},
});

export type IScenarioModel = Prisma.ScenarioGetPayload<
	typeof scenarioWithAnswers
>;
