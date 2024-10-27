import { useForm } from "react-hook-form";
import { CreateSceneFormType } from "../types/create-scene-form-schema-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSceneFormSchema } from "../schemas/create-scene-form-schema";
import { useToast } from "@/shared/hooks/use-toast";
import { createSceneAction } from "../server/create-scene-action";
import { IQuestion } from "../types/question-type";
import { useRouter } from "next/navigation";

export function useCreateSceneForm() {
	const form = useForm<CreateSceneFormType>({
		defaultValues: {
			data: {
				text: "",
				confirmationText: "",
				answers: {
					first: "",
					second: "",
					isNotClickable: undefined,
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
			const question: IQuestion = {
				data: {
					text: data.text,
					confirmationText: data.confirmationText,
					answers: [
						{
							text: data.answers.first,
							isNotClicable: data.answers.isNotClickable === "first",
						},
						{
							text: data.answers.second,
							isNotClicable: data.answers.isNotClickable === "second",
						},
					],
				},
			};
			const httpServerResponse = await createSceneAction(question);
			router.push(`/cenario/${httpServerResponse.id}`);
		} catch (error) {
			console.log(error);
			toast({
				title: "Ops!",
				description:
					"Ocorreu um erro ao criar este cenário. Por favor, aguarde alguns minutos e tente novamente.",
				variant: "destructive",
			});
		}
	});
	return {
		form,
		onSubmit,
	};
}
