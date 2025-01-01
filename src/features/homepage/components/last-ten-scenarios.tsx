import { getLastTenScenariosAction } from "@/features/scenario/actions/get-last-ten-scenarios";
import { Typography } from "@/shared/components/ui/typography";
import { ScenarioCard } from "./scenario-card";

export const revalidate = 60;

export async function LastTenScenarios() {
    const lastTenScenarios = await getLastTenScenariosAction();

    if (!lastTenScenarios.data || lastTenScenarios.data.length === 0) {
        return (
            <div className="flex items-center justify-center">
                <Typography variant="p">
                    Nenhum cenário criado ainda... :(
                </Typography>
            </div>
        );
    } else {
        return (
            <div className="flex flex-row flex-wrap items-stretch justify-center gap-4 w-full">
                {lastTenScenarios.data.map((scenario) => (
                    <ScenarioCard key={scenario.id} scenario={scenario} />
                ))}
            </div>
        );
    }
}
