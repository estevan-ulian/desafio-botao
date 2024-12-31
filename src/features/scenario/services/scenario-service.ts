import { PrismaClient } from "@prisma/client";
import { ICreateScenarioBody } from "../types/scenario-type";
import {
    ICreateScenarioActionResponse,
    IGetLastTenScenariosServiceResponse,
    IGetScenarioServiceResponse,
} from "../types/scenario-actions-type";

export interface IScenarioService {
    create: (
        scenario: ICreateScenarioBody,
    ) => Promise<ICreateScenarioActionResponse>;
    findOne: (id: string) => Promise<IGetScenarioServiceResponse>;
    findLastTen: () => Promise<IGetLastTenScenariosServiceResponse>;
}

export function scenarioService(api: PrismaClient): IScenarioService {
    return {
        create: async (
            scenario: ICreateScenarioBody,
        ): Promise<ICreateScenarioActionResponse> => {
            const { data } = scenario;

            if (!data.question) {
                return {
                    data: null,
                    error: {
                        message: "Insira um texto para a pergunta.",
                    },
                };
            }

            if (!data.confirmationType) {
                return {
                    data: null,
                    error: {
                        message: "Selecione um tipo de confirmação.",
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

            const createScenario = await api.scenario.create({
                data: {
                    question: data.question,
                    confirmationType: data.confirmationType,
                    confirmationContent: data.confirmationContent,
                    answers: {
                        create: data.answers,
                    },
                },
            });

            return { data: { id: createScenario.id }, error: null };
        },

        findOne: async (id: string): Promise<IGetScenarioServiceResponse> => {
            const scenario = await api.scenario.findUnique({
                where: {
                    id,
                },
                include: {
                    answers: true,
                },
            });

            if (!scenario?.id) {
                return {
                    data: null,
                    error: {
                        message: "Cenário não encontrado ou já foi excluído.",
                    },
                };
            }

            return {
                data: {
                    id: scenario.id,
                    question: scenario.question,
                    confirmationType: scenario.confirmationType,
                    confirmationContent: scenario.confirmationContent,
                    createdAt: scenario.createdAt,
                    answers: scenario.answers,
                },
                error: null,
            };
        },

        findLastTen: async (): Promise<IGetLastTenScenariosServiceResponse> => {
            const scenarios = await api.scenario.findMany({
                take: 10,
                orderBy: {
                    createdAt: "desc",
                },
                include: {
                    answers: true,
                },
            });

            if (!scenarios.length) {
                return {
                    data: [],
                    error: {
                        message: "Nenhum cenário encontrado.",
                    },
                };
            }

            return {
                data: scenarios.map((scenario) => ({
                    id: scenario.id,
                    question: scenario.question,
                    confirmationType: scenario.confirmationType,
                    confirmationContent: scenario.confirmationContent,
                    createdAt: scenario.createdAt,
                    answers: scenario.answers,
                })),
                error: null,
            };
        },
    };
}
