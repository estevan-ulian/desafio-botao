import { ViewScenePage } from "@/features/scene/pages/view-scene-page";

interface IPageProps {
	params: { id: string };
}

export const dynamic = "force-dynamic";

export default async function Page({ params }: IPageProps) {
	const { id } = params;
	return <ViewScenePage sceneId={id} />;
}
