import { ViewScenePage } from "@/features/scene/pages/view-scene-page";
import { viewSceneAction } from "@/features/scene/server/view-scene-action";

interface IPageProps {
	params: { id: string };
}

export const dynamic = "force-dynamic";

export default async function Page({ params }: IPageProps) {
	const { id } = params;
	const scene = await viewSceneAction(id);

	if (!scene.data) {
		throw new Error(scene.error?.message);
	}

	return <ViewScenePage scene={scene} />;
}
