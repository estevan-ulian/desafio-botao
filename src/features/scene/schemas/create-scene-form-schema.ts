import { z } from "zod";

export const answerSchema = z
	.string()
	.min(3, "A resposta deve ter no mínimo 3 caracteres");

export const createSceneFormSchema = z.object({
	data: z.object({
		text: z.string().min(10, "A pergunta deve ter no mínimo 10 caracteres"),
		confirmationText: z
			.string()
			.min(10, "A confirmação deve ter no mínimo 10 caracteres"),
		answers: z.object({
			first: answerSchema,
			second: answerSchema,
			isNotClickable: z.enum(["first", "second"], {
				required_error: "Selecione qual botão não poderá ser clicado",
			}),
		}),
	}),
});
