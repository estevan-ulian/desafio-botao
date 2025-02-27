import Link from "next/link";
import { ArrowLeft, PartyPopper } from "lucide-react";
import { Alert, AlertDescription } from "@/shared/components/ui/alert";
import { Typography } from "@/shared/components/ui/typography";
import { Footer } from "@/shared/components/footer";
import { Button } from "@/shared/components/ui/button";
import { CreateScenarioStepperForm } from "./components/create-scenario-stepper-form";

export async function CreateScenarioPage() {
    return (
        <>
            <main className="flex-grow flex flex-col">
                <section className="w-full">
                    <div className="max-w-screen-md mx-auto w-full px-4 py-10">
                        <Button asChild variant="link" className="p-0 m-0">
                            <Link href="/">
                                <ArrowLeft /> Voltar
                            </Link>
                        </Button>
                        <Typography variant="h1">Desafio do botão</Typography>
                        <Alert className="my-8">
                            <PartyPopper className="size-4" />
                            <Typography variant="h5" as="h2">
                                Crie seu próprio cenário
                            </Typography>
                            <AlertDescription>
                                <ol>
                                    <li>
                                        Defina uma pergunta e duas respostas
                                        para criar um cenário.
                                    </li>
                                    <li>
                                        Uma das respostas será impossível de
                                        clicar.
                                    </li>
                                    <li>
                                        <strong>
                                            {" "}
                                            Divirta-se com seus amigos!
                                        </strong>
                                    </li>
                                </ol>
                            </AlertDescription>
                        </Alert>
                        <CreateScenarioStepperForm />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
