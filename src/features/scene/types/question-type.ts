import { Prisma } from "@prisma/client";

interface IAnswer {
	id?: string;
	text: string;
	isNotClickable: boolean;
}

interface QuestionData {
	id?: string;
	text: string;
	confirmationText: string;
	answers: IAnswer[];
}

export interface IQuestionCreateBody {
	data: QuestionData;
}

const questionWithAnswers = Prisma.validator<Prisma.QuestionDefaultArgs>()({
	include: {
		answers: true,
	},
});

export type IQuestionModel = Prisma.QuestionGetPayload<
	typeof questionWithAnswers
>;
