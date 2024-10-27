"use client";
import { Button } from "@/shared/components/ui/button";
import { IAnswer } from "../types/question-type";
import { useViewSceneDialogConfirmationTextStore } from "../store/view-scene-dialog-confirmation-text-store";
import { MovingButton } from "./moving-button";

interface ViewSceneButtonsProps {
	answers: IAnswer[];
}

export function ViewSceneButtons({ answers }: ViewSceneButtonsProps) {
	const actions = useViewSceneDialogConfirmationTextStore(
		(store) => store.actions,
	);
	return (
		<div className="w-full flex items-center justify-center gap-10">
			{answers.map((answer) => {
				if (!answer.isNotClicable) {
					return (
						<Button
							key={answer.id}
							className="min-w-52"
							size="lg"
							onClick={() => {
								if (!answer.isNotClicable) {
									actions.openDialog();
								}
							}}
							variant={answer.isNotClicable ? "outline" : "default"}
						>
							{answer.text}
						</Button>
					);
				} else {
					return <MovingButton key={answer.id} label={answer.text} />;
				}
			})}
		</div>
	);
}
