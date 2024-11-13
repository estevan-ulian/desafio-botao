"use client";

import { DrawerConfirmation } from "./drawer-confirmation";
import { MovingButton } from "./moving-button";
import { IGetScenarioServiceResponse } from "@/features/scenario/types/scenario-actions-type";

interface ButtonsProps {
	scenario: IGetScenarioServiceResponse["data"];
}

export function Buttons({ scenario }: ButtonsProps) {
	return (
		<div className="w-full flex flex-col sm:flex-row items-stretch justify-center gap-5 px-4">
			{scenario!.answers?.map((answer) => {
				if (!answer.isNotClickable) {
					return (
						<DrawerConfirmation
							key={answer.id}
							text={answer.text}
							confirmationType={scenario!.confirmationType}
							confirmationContent={scenario!.confirmationContent!}
						/>
					);
				} else {
					return <MovingButton key={answer.id} label={answer.text} />;
				}
			})}
		</div>
	);
}
