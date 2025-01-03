import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCreateScenarioFormStore } from "../../../hooks/use-create-scenario-form-store";

const formStepOneSchema = z.object({
    data: z.object({
        question: z
            .string()
            .min(10, "A pergunta deve ter no mínimo 10 caracteres")
            .max(50, "A pergunta deve ter no máximo 50 caracteres"),
    }),
});

export type FormStepOneData = z.infer<typeof formStepOneSchema>;

export function useFormStepOne() {
    const { formData, next } = useCreateScenarioFormStore();
    const form = useForm<FormStepOneData>({
        defaultValues: {
            data: {
                question: formData.question,
            },
        },
        resolver: zodResolver(formStepOneSchema),
    });

    const onSubmit = form.handleSubmit(({ data }: FormStepOneData) => {
        next(data);
    });

    return { form, onSubmit };
}
