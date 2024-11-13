import { Typography } from "@/shared/components/ui/typography";
import { Footer } from "@/shared/components/footer";
import { IGetScenarioServiceResponse } from "../../types/scenario-actions-type";
import { Buttons } from "./components/buttons";

interface IViewScenarioPageProps {
	scenario: IGetScenarioServiceResponse["data"];
}

export function ViewScenarioPage({ scenario }: IViewScenarioPageProps) {
	return (
		<>
			<main className="flex-grow flex flex-col justify-center relative">
				<section className="w-full">
					<div className="max-w-screen-md mx-auto w-full px-4 py-10">
						<div className="w-full flex flex-col gap-10">
							<Typography variant="h1" className="text-center">
								{scenario!.question}
							</Typography>

							<Buttons scenario={scenario} />
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
