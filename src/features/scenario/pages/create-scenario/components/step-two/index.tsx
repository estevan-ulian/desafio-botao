"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { useFormStepTwo } from "./hooks/use-form-step-two";
import { FormStepTwo } from "./components/form-step-two";
import { Typography } from "@/shared/components/ui/typography";

export function StepTwo() {
	const methods = useFormStepTwo();
	return (
		<>
			<Card className="mt-5">
				<CardHeader>
					<CardTitle asChild>
						<Typography variant="h5" as="h3">
							Defina duas respostas para a pergunta
						</Typography>
					</CardTitle>
					<CardDescription>
						Escolha duas alternativas para a pergunta que você criou. Pense em
						respostas que sejam plausíveis e que façam sentido com o contexto da
						pergunta.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<FormStepTwo {...methods} />
				</CardContent>
			</Card>
		</>
	);
}
