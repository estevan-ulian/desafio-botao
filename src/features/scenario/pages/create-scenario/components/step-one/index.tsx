"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { FormStepOne } from "./components/form-step-one";
import { useFormStepOne } from "./hooks/use-form-step-one";
import { Typography } from "@/shared/components/ui/typography";

export function StepOne() {
	const methods = useFormStepOne();
	return (
		<>
			<Card className="mt-5">
				<CardHeader>
					<CardTitle asChild>
						<Typography variant="h5" as="h3">
							Defina uma pergunta!
						</Typography>
					</CardTitle>
					<CardDescription>
						Escolha uma pergunta que faça o jogador pensar. Pode ser uma dúvida
						curiosa, um dilema engraçado ou até uma pegadinha!
					</CardDescription>
				</CardHeader>
				<CardContent>
					<FormStepOne {...methods} />
				</CardContent>
			</Card>
		</>
	);
}
