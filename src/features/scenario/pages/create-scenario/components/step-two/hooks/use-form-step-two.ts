import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodIssueCode } from "zod";
import { useCreateScenarioFormStore } from "../../../hooks/use-create-scenario-form-store";

const formStepTwoSchema = z.object({
    data: z.object({
        answers: z
            .object({
                firstAnswer: z
                    .string()
                    .min(3, "A resposta deve ter no mínimo 3 caracteres")
                    .max(25, "A resposta deve ter no máximo 25 caracteres"),
                secondAnswer: z
                    .string()
                    .min(3, "A resposta deve ter no mínimo 3 caracteres")
                    .max(25, "A resposta deve ter no máximo 25 caracteres"),
                isNotClickable: z.enum(["", "firstAnswer", "secondAnswer"]),
            })
            .superRefine((arg, ctx) => {
                const { isNotClickable } = arg;
                if (!isNotClickable) {
                    return ctx.addIssue({
                        code: ZodIssueCode.custom,
                        message: "Selecione a resposta que NÃO será clicável",
                        path: ["isNotClickable"],
                    });
                }
            }),
    }),
});

export type FormStepTwoData = z.infer<typeof formStepTwoSchema>;

export function useFormStepTwo() {
    const { next, formData } = useCreateScenarioFormStore();
    const form = useForm<FormStepTwoData>({
        defaultValues: {
            data: {
                answers: formData.answers,
            },
        },
        resolver: zodResolver(formStepTwoSchema),
    });
    const onSubmit = form.handleSubmit(({ data }: FormStepTwoData) => {
        next(data);
    });

    return { form, onSubmit };
}
