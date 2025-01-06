import dynamic from "next/dynamic";

const CreateScenarioPageNoSSR = dynamic(
    () =>
        import("@/features/scenario/pages/create-scenario").then(
            (mod) => mod.CreateScenarioPage
        ),
    {
        ssr: false,
    }
);

export default function Page() {
    return <CreateScenarioPageNoSSR />;
}
