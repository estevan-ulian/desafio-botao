"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/shared/components/ui/card";
import { FormStepThree } from "./components/form-step-three";
import { useFormStepThree } from "./hooks/use-form-step-three";
import { Typography } from "@/shared/components/ui/typography";

export function StepThree() {
    const methods = useFormStepThree();
    return (
        <>
            <Card className="mt-5">
                <CardHeader>
                    <CardTitle asChild>
                        <Typography variant="h5" as="h3">
                            Tela de confirmação
                        </Typography>
                    </CardTitle>
                    <CardDescription>
                        Escolha o que será exibido quando a pessoa clicar no{" "}
                        <strong>botão permitido.</strong> Pode ser uma imagem,
                        um GIF, um vídeo ou um simples texto. Você escolhe!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FormStepThree {...methods} />
                </CardContent>
            </Card>
        </>
    );
}
