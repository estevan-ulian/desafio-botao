import { IScenarioModel } from "@/features/scenario/types/scenario-type";
import { Button } from "@/shared/components/ui/button";
import { Typography } from "@/shared/components/ui/typography";
import Link from "next/link";

interface IScenarioCardProps {
    scenario: IScenarioModel;
}

export function ScenarioCard({ scenario }: IScenarioCardProps) {
    return (
        <Button
            asChild
            variant="outline"
            className="m-0 hover:no-underline group h-auto flex flex-col w-auto basis-full md:basis-[240px]"
        >
            <Link href={`/cenario/${scenario.id}`}>
                <>
                    <Typography
                        variant="p"
                        as="h3"
                        className="!mb-0 !p-0 whitespace-pre-wrap leading-tight text-center cursor-pointer"
                    >
                        {scenario.question}
                    </Typography>
                    <span className="text-xs text-muted-foreground">
                        Criado em{" "}
                        {new Date(scenario.createdAt).toLocaleDateString(
                            "pt-BR",
                            {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            }
                        )}
                    </span>
                </>
            </Link>
        </Button>
    );
}
