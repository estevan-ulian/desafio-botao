import { describe, it, expect, vi } from "vitest";
import { PrismaClient } from "@prisma/client";
import { scenarioService } from "./scenario-service";
import { ICreateScenarioBody } from "../types/scenario-type";

// Mock the unstable_cache function
vi.mock("next/cache", () => ({
    unstable_cache: vi.fn().mockImplementation(async (fn) => {
        return await fn();
    }),
}));

const mockPrisma = {
    scenario: {
        create: vi.fn(),
        findUnique: vi.fn(),
        findMany: vi.fn(),
    },
} as unknown as PrismaClient;

const service = scenarioService(mockPrisma);

describe("Scenario Service", () => {
    describe("create", () => {
        it("should create a scenario successfully", async () => {
            const scenario: ICreateScenarioBody = {
                data: {
                    question: "Sample question?",
                    confirmationType: "type",
                    confirmationContent: "content",
                    answers: [
                        { text: "Answer 1", isNotClickable: false },
                        { text: "Answer 2", isNotClickable: true },
                    ],
                },
            };

            mockPrisma.scenario.create.mockResolvedValue({ id: "1" });

            const response = await service.create(scenario);

            expect(response.data).toEqual({ id: "1" });
            expect(response.error).toBeNull();
        });

        it("should return error if question is missing", async () => {
            const scenario: ICreateScenarioBody = {
                data: {
                    question: "",
                    confirmationType: "type",
                    confirmationContent: "content",
                    answers: [
                        { text: "Answer 1", isNotClickable: false },
                        { text: "Answer 2", isNotClickable: true },
                    ],
                },
            };

            const response = await service.create(scenario);

            expect(response.data).toBeNull();
            expect(response.error?.message).toBe(
                "Insira um texto para a pergunta."
            );
        });

        it("should return error if confirmationType is missing", async () => {
            const scenario: ICreateScenarioBody = {
                data: {
                    question: "Sample question?",
                    confirmationType: "",
                    confirmationContent: "content",
                    answers: [
                        { text: "Answer 1", isNotClickable: false },
                        { text: "Answer 2", isNotClickable: true },
                    ],
                },
            };

            const response = await service.create(scenario);

            expect(response.data).toBeNull();
            expect(response.error?.message).toBe(
                "Selecione um tipo de confirmação."
            );
        });

        it("should return error if answers are missing", async () => {
            const scenario: ICreateScenarioBody = {
                data: {
                    question: "Sample question?",
                    confirmationType: "type",
                    confirmationContent: "content",
                    answers: [],
                },
            };

            const response = await service.create(scenario);

            expect(response.data).toBeNull();
            expect(response.error?.message).toBe(
                "As perguntas devem ter 2 respostas."
            );
        });

        it("should return error if answers length is not 2", async () => {
            const scenario: ICreateScenarioBody = {
                data: {
                    question: "Sample question?",
                    confirmationType: "type",
                    confirmationContent: "content",
                    answers: [{ text: "Answer 1", isNotClickable: false }],
                },
            };

            const response = await service.create(scenario);

            expect(response.data).toBeNull();
            expect(response.error?.message).toBe(
                "As perguntas devem ter 2 respostas."
            );
        });

        it("should return error if more than one answer is clickable", async () => {
            const scenario: ICreateScenarioBody = {
                data: {
                    question: "Sample question?",
                    confirmationType: "type",
                    confirmationContent: "content",
                    answers: [
                        { text: "Answer 1", isNotClickable: false },
                        { text: "Answer 2", isNotClickable: false },
                    ],
                },
            };

            const response = await service.create(scenario);

            expect(response.data).toBeNull();
            expect(response.error?.message).toBe(
                "Apenas uma resposta pode ser clicável."
            );
        });
    });

    describe("findOne", () => {
        it("should find a scenario by ID", async () => {
            const scenario = {
                id: "1",
                question: "Sample question?",
                confirmationType: "type",
                confirmationContent: "content",
                createdAt: new Date(),
                answers: [
                    {
                        id: "1",
                        text: "Answer 1",
                        isNotClickable: false,
                    },
                    {
                        id: "2",
                        text: "Answer 2",
                        isNotClickable: true,
                    },
                ],
            };

            mockPrisma.scenario.findUnique.mockResolvedValue(scenario);

            const response = await service.findOne("1");

            expect(response.data).toEqual(scenario);
            expect(response.error).toBeNull();
        });

        it("should return error if scenario not found", async () => {
            mockPrisma.scenario.findUnique.mockResolvedValue(null);

            const response = await service.findOne("1");

            expect(response.data).toBeNull();
            expect(response.error?.message).toBe(
                "Cenário não encontrado ou já foi excluído."
            );
        });
    });

    describe("findLastTen", () => {
        it("should return the last ten scenarios", async () => {
            const scenarios = Array.from({ length: 10 }, (_, i) => ({
                id: `${i + 1}`,
                question: `Question ${i + 1}`,
                confirmationType: "type",
                confirmationContent: "content",
                createdAt: new Date(),
                answers: [],
            }));

            mockPrisma.scenario.findMany.mockResolvedValue(scenarios);

            const response = await service.findLastTen();

            expect(response.data).toHaveLength(10);
            expect(response.error).toBeNull();
        });

        it("should return error if no scenarios found", async () => {
            mockPrisma.scenario.findMany.mockResolvedValue([]);

            const response = await service.findLastTen();

            expect(response.data).toEqual([]);
            expect(response.error?.message).toBe("Nenhum cenário encontrado.");
        });
    });
});
