import {
	ICreateSceneActionResponse,
	IGetSceneServiceResponse,
} from "../types/scene-actions-type";
import { IQuestionCreateBody } from "../types/question-type";
import { PrismaClient } from "@prisma/client";

export interface ISceneService {
	create: (
		scenario: IQuestionCreateBody,
	) => Promise<ICreateSceneActionResponse>;
	findOne: (id: string) => Promise<IGetSceneServiceResponse>;
}

export function sceneService(api: PrismaClient): ISceneService {
	return {
		create: async (
			scenario: IQuestionCreateBody,
		): Promise<ICreateSceneActionResponse> => {
			const { data } = scenario;

			if (!data.text) {
				return {
					data: null,
					error: {
						message: "Insira um texto para a pergunta.",
					},
				};
			}

			if (!data.confirmationText) {
				return {
					data: null,
					error: {
						message: "Insira um texto de confirmação.",
					},
				};
			}

			if (!data.answers) {
				return {
					data: null,
					error: {
						message: "Não há respostas para a pergunta.",
					},
				};
			}

			if (data.answers.length !== 2) {
				return {
					data: null,
					error: {
						message: "As perguntas devem ter 2 respostas.",
					},
				};
			}

			const question = await api.question.create({
				data: {
					text: data.text,
					confirmationText: data.confirmationText,
					answers: {
						create: data.answers,
					},
				},
			});

			return { data: { id: question.id }, error: null };
		},

		findOne: async (id: string): Promise<IGetSceneServiceResponse> => {
			const question = await api.question.findUnique({
				where: {
					id,
				},
				include: {
					answers: true,
				},
			});

			if (!question?.id) {
				return {
					data: null,
					error: {
						message: "Cenário não encontrado ou já foi excluído.",
					},
				};
			}

			return {
				data: {
					id: question.id,
					text: question.text,
					confirmationText: question.confirmationText,
					createdAt: question.createdAt,
					answers: question.answers,
				},
				error: null,
			};
		},
	};
}
