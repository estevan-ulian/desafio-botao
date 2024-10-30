"use client";
import { useForm } from "react-hook-form";
import { CreateSceneFormType } from "../types/create-scene-form-schema-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSceneFormSchema } from "../schemas/create-scene-form-schema";
import { useToast } from "@/shared/hooks/use-toast";
import { useRouter } from "next/navigation";
import { IQuestionCreateBody } from "../types/question-type";
import { ICreateSceneActionResponse } from "../types/scene-actions-type";

export function useCreateSceneForm(
	createSceneAction: (
		data: IQuestionCreateBody,
	) => Promise<ICreateSceneActionResponse>,
) {
	const form = useForm<CreateSceneFormType>({
		defaultValues: {
			data: {
				text: "Casa ou apartamento?",
				confirmationText: "Eu já sabia seu safado",
				answers: {
					first: "Casa",
					second: "Apartamento",
					isNotClickable: "second",
				},
			},
		},
		resolver: zodResolver(createSceneFormSchema),
		mode: "onSubmit",
		criteriaMode: "all",
	});
	const router = useRouter();
	const { toast } = useToast();

	const onSubmit = form.handleSubmit(async ({ data }: CreateSceneFormType) => {
		try {
			const question: IQuestionCreateBody = {
				data: {
					text: data.text,
					confirmationText: data.confirmationText,
					answers: [
						{
							text: data.answers.first,
							isNotClickable: data.answers.isNotClickable === "first",
						},
						{
							text: data.answers.second,
							isNotClickable: data.answers.isNotClickable === "second",
						},
					],
				},
			};
			const httpServerResponse = await createSceneAction(question);
			if (httpServerResponse.error) {
				throw new Error(httpServerResponse.error.message);
			}
			toast({
				title: "Sucesso!",
				description:
					"Cenário criado com sucesso. Você será redirecionado em alguns instantes.",
			});
			setTimeout(() => {
				router.push(`/cenario/${httpServerResponse.data?.id}`);
			}, 3000);
		} catch (error: unknown) {
			const err = error as Error;
			toast({
				title: "Ops!",
				description:
					err.message ||
					"Ocorreu um erro ao criar este cenário. Por favor, aguarde alguns minutos e tente novamente.",
				variant: "destructive",
				duration: 3000,
			});
		}
	});
	return {
		form,
		onSubmit,
	};
}
