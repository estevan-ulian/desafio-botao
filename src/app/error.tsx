"use client";
import Link from "next/link";
import React from "react";
import { Info } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { AppError } from "@/shared/utils/app-error";

export default function Error({
	error,
	reset,
}: {
	error: AppError & { digest?: string };
	reset: () => void;
}) {
	React.useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex-1 flex flex-col justify-center items-center">
			<div className="w-full max-w-screen-md mx-auto px-4">
				<Info className="size-10 text-destructive mb-3" />
				<h2 className="text-3xl font-bold text-primary mb-1">
					Ooops! Algo deu errado.
				</h2>
				<p className="text-lg text-muted-foreground">
					{error.message || "Desculpe-nos pelo incoveniente."}
				</p>
				<div className="flex gap-2 items-center mt-8">
					<Button asChild size="lg">
						<Link href="/">Voltar para a página inicial</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
