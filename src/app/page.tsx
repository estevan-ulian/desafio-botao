import { Homepage } from "@/features/homepage";
import { getLastTenScenariosAction } from "@/features/scenario/actions/get-last-ten-scenarios";

export default async function Page() {
    const scenarios = await getLastTenScenariosAction();

    return <Homepage lastTenScenarios={scenarios.data ?? []} />;
}
