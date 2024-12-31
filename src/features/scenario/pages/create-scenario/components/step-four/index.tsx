"use client";
import { Button } from "@/shared/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shared/components/ui/card";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useCreateScenarioFormStore } from "../../hooks/use-create-scenario-form-store";
import { Typography } from "@/shared/components/ui/typography";
import { PopoverAnswers } from "./components/popover-answer";
import { cn } from "@/shared/utils/cn";
import { YoutubeEmbed } from "@/shared/components/youtube-embed";

export function StepFour() {
    const {
        formData,
        isCreatingScenario,
        isCreatedScenarioSuccessfully,
        prev,
        createScenario,
    } = useCreateScenarioFormStore();
    return (
        !isCreatedScenarioSuccessfully && (
            <>
                <Card className="mt-5">
                    <CardHeader>
                        <CardTitle asChild>
                            <Typography variant="h5" as="h3">
                                Seu cenário está quase pronto!
                            </Typography>
                        </CardTitle>
                        <CardDescription>
                            Revise as informações abaixo. Se estiver tudo certo
                            clique em criar cenário!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <Typography variant="strong">Pergunta:</Typography>
                            <p>{formData.question}</p>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <Typography variant="strong">Respostas:</Typography>
                            <div className="flex flex-wrap items-center gap-3">
                                <p
                                    className={cn(
                                        "py-1 px-2 border border-border rounded-md flex items-center justify-center gap-1",
                                    )}
                                >
                                    {formData.answers.firstAnswer}
                                    <PopoverAnswers
                                        message={
                                            formData.answers.isNotClickable ===
                                            "firstAnswer" ? (
                                                <>
                                                    Esta resposta{" "}
                                                    <strong>não</strong> poderá
                                                    ser clicada.
                                                </>
                                            ) : (
                                                "Ao clicar nesta resposta o conteúdo abaixo será exibido."
                                            )
                                        }
                                    />
                                </p>
                                <p
                                    className={cn(
                                        "py-1 px-2 border border-border rounded-md flex items-center justify-center gap-2",
                                    )}
                                >
                                    {formData.answers.secondAnswer}
                                    <PopoverAnswers
                                        message={
                                            formData.answers.isNotClickable ===
                                            "secondAnswer" ? (
                                                <>
                                                    Esta resposta{" "}
                                                    <strong>não</strong> poderá
                                                    ser clicada.
                                                </>
                                            ) : (
                                                "Ao clicar nesta resposta o conteúdo abaixo será exibido."
                                            )
                                        }
                                    />
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <Typography variant="strong">
                                Confirmação:
                            </Typography>
                            <Typography variant="smallText" weight="normal">
                                Ao clicar na resposta "
                                {formData.answers.isNotClickable !==
                                "firstAnswer"
                                    ? formData.answers.firstAnswer
                                    : formData.answers.secondAnswer}
                                " este conteúdo será exibido na tela.
                            </Typography>
                            {formData.confirmation.confirmationType ===
                            "text" ? (
                                <p className="py-1 px-2 border border-border rounded-md">
                                    {formData.confirmation.confirmationContent}
                                </p>
                            ) : formData.confirmation.confirmationType ===
                                  "image" ||
                              formData.confirmation.confirmationType ===
                                  "gif" ? (
                                <img
                                    src={
                                        formData.confirmation
                                            .confirmationContent
                                    }
                                    width={420}
                                    height={420}
                                    className="h-auto w-full max-w-full mt-2 object-contain"
                                    alt="Confirmação do cenário"
                                />
                            ) : formData.confirmation.confirmationType ===
                              "video" ? (
                                <YoutubeEmbed
                                    url={
                                        formData.confirmation
                                            .confirmationContent
                                    }
                                />
                            ) : null}
                        </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between gap-5 w-full mt-10">
                        <Button
                            className="w-full"
                            variant="outline"
                            onClick={prev}
                        >
                            <>
                                <ArrowLeft className="size-4" /> Voltar
                            </>
                        </Button>
                        <Button
                            className="w-full"
                            type="button"
                            disabled={isCreatingScenario}
                            onClick={createScenario}
                        >
                            {isCreatingScenario ? (
                                <>
                                    <Loader2 className="size-5 animate-spin" />{" "}
                                    Criando cenário...
                                </>
                            ) : (
                                "Criar cenário"
                            )}
                        </Button>
                    </CardFooter>
                </Card>
            </>
        )
    );
}
