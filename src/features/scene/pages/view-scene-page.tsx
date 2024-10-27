import axios from "axios";
import { HttpClient } from "@/shared/services/http/http-client";
import { SceneService } from "../services/scene-service";
import { env } from "@/shared/utils/env";

import { Typography } from "@/shared/components/ui/typography";
import { Footer } from "@/shared/components/footer";
import { ViewSceneButtons } from "../components/view-scene-buttons";
import { ViewSceneDialogConfirmationText } from "../components/view-scene-dialog-confirmation-text";
import { AppError } from "@/shared/utils/app-error";

const httpClient = HttpClient.create(axios, env.BASE_API_URL);
const sceneService = new SceneService(httpClient);

export async function ViewScenePage({ sceneId }: { sceneId: string }) {
	const scene = await sceneService.findOne(sceneId);

	return (
		<>
			<main className="flex-grow flex flex-col justify-center relative">
				<section className="w-full">
					<div className="max-w-screen-md mx-auto w-full px-4 py-10">
						<div className="w-full flex flex-col gap-10">
							<Typography variant="h1" className="text-center">
								{scene.data.text}
							</Typography>

							<ViewSceneButtons answers={scene.data.answers} />
							<ViewSceneDialogConfirmationText
								text={scene.data.confirmationText}
							/>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
