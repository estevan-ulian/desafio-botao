"use client";
import { IQuestionCreateBody } from "../types/question-type";
import { MovingButton } from "./moving-button";
import { ViewSceneDrawerConfirmation } from "./view-scene-drawer-confirmation";

interface ViewSceneButtonsProps {
	scene: IQuestionCreateBody["data"];
}

export function ViewSceneButtons({ scene }: ViewSceneButtonsProps) {
	return (
		<div className="w-full flex flex-col sm:flex-row items-stretch justify-center gap-5 px-4">
			{scene.answers?.map((answer) => {
				if (!answer.isNotClickable) {
					return (
						<ViewSceneDrawerConfirmation
							key={answer.id}
							text={answer.text}
							confirmationText={scene.confirmationText ?? ""}
						/>
					);
				} else {
					return <MovingButton key={answer.id} label={answer.text} />;
				}
			})}
		</div>
	);
}
