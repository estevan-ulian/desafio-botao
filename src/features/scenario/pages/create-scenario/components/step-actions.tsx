import { Button } from "@/shared/components/ui/button";
import { useStepper } from "@/shared/components/ui/stepper";
import { cn } from "@/shared/utils/cn";
import { ArrowLeft } from "lucide-react";
import { useCreateScenarioFormStore } from "../hooks/use-create-scenario-form-store";

export function StepActions() {
	const { isFirstStep, hasCompletedAllSteps, prev } =
		useCreateScenarioFormStore();
	return (
		<div
			className={cn(
				"flex items-center justify-between gap-5 w-full mt-10",
				hasCompletedAllSteps && "hidden",
			)}
		>
			<Button
				className="w-full"
				variant="outline"
				onClick={prev}
				disabled={isFirstStep}
			>
				<>
					<ArrowLeft className="size-4" /> Voltar
				</>
			</Button>
			<Button className="w-full" type="submit">
				<>
					Avançar
					<ArrowLeft className="size-4 rotate-180" />
				</>
			</Button>
		</div>
	);
}
