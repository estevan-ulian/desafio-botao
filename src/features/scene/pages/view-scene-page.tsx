import { Typography } from "@/shared/components/ui/typography";
import { Footer } from "@/shared/components/footer";
import { ViewSceneButtons } from "../components/view-scene-buttons";
import { viewSceneAction } from "../server/view-scene-action";

export const revalidate = 60 * 60 * 24 * 2; // 2 days

export async function ViewScenePage({ sceneId }: { sceneId: string }) {
	const scene = await viewSceneAction(sceneId);

	if (!scene.data) {
		throw new Error(scene.error?.message);
	}

	return (
		<>
			<main className="flex-grow flex flex-col justify-center relative">
				<section className="w-full">
					<div className="max-w-screen-md mx-auto w-full px-4 py-10">
						<div className="w-full flex flex-col gap-10">
							<Typography variant="h1" className="text-center">
								{scene.data.text}
							</Typography>

							<ViewSceneButtons scene={scene.data} />
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
