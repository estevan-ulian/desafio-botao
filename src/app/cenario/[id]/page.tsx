import { ViewScenePage } from "@/features/scene/pages/view-scene-page";

interface IPageProps {
	params: Promise<{ id: string }>;
}

export default async function Page({ params }: IPageProps) {
	const { id } = await params;
	return <ViewScenePage sceneId={id} />;
}
