"use client";
import { IAnswer, IQuestion } from "../types/question-type";
import { MovingButton } from "./moving-button";
import { ViewSceneDrawerConfirmation } from "./view-scene-drawer-confirmation";

interface ViewSceneButtonsProps {
	scene: IQuestion["data"];
}

export function ViewSceneButtons({ scene }: ViewSceneButtonsProps) {
	return (
		<div className="w-full flex items-center justify-center gap-5 px-4">
			{scene.answers.map((answer) => {
				if (!answer.isNotClicable) {
					return (
						<ViewSceneDrawerConfirmation
							key={answer.id}
							text={answer.text}
							confirmationText={scene.confirmationText}
						/>
					);
				} else {
					return <MovingButton key={answer.id} label={answer.text} />;
				}
			})}
		</div>
	);
}
