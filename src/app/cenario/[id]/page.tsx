import { viewScenarioAction } from "@/features/scenario/actions/view-scenario-action";
import { ViewScenarioPage } from "@/features/scenario/pages/view-scenario";

interface IPageProps {
    params: { id: string };
}

export const revalidate = 0;

export default async function Page({ params }: IPageProps) {
    const { id } = params;
    const scenario = await viewScenarioAction(id);

    if (!scenario.data)
        throw new Error(
            scenario.error?.message || "Ocorreu um erro ao carregar cenário :("
        );

    return <ViewScenarioPage scenario={scenario.data} />;
}
