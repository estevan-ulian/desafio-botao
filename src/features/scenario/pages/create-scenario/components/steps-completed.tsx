"use client";
import Lottie from "react-lottie";
import * as animationData from "@/shared/assets/lotties/successfully.json";

import { SocialSharePopover } from "@/shared/components/social-share";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { useCreateScenarioFormStore } from "../hooks/use-create-scenario-form-store";
import { Typography } from "@/shared/components/ui/typography";

import Link from "next/link";

export function StepsCompleted() {
	const { hasCompletedAllSteps, scenarioId } = useCreateScenarioFormStore();

	const scenarioUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL!);
	scenarioUrl.pathname = `/cenario/${scenarioId}`;

	return (
		hasCompletedAllSteps && (
			<>
				<Card className="mt-5">
					<CardHeader>
						<CardTitle asChild>
							<Typography variant="h5" as="h3">
								Cenário criado com sucesso!
							</Typography>
						</CardTitle>
						<CardDescription>
							Compartilhe com seus amigos e divirta-se!
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-5 w-full mt-10">
						<div className="max-w-full w-full flex items-center justify-center">
							<Lottie
								options={{
									animationData,
									autoplay: true,
									loop: true,
									rendererSettings: {
										preserveAspectRatio: "xMidYMid slice",
									},
								}}
								height={200}
								width={400}
							/>
						</div>
						<div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
							<Button asChild className="w-full">
								<Link href={scenarioUrl.toString()}>Entrar no cenário</Link>
							</Button>
							<SocialSharePopover url={scenarioUrl.toString()} />
						</div>
					</CardContent>
				</Card>
			</>
		)
	);
}
