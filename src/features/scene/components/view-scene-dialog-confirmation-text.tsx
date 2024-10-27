"use client";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/shared/components/ui/dialog";
import { Typography } from "@/shared/components/ui/typography";
import { useViewSceneDialogConfirmationTextStore } from "../store/view-scene-dialog-confirmation-text-store";
import { ViewSceneShareButtons } from "./view-scene-share-buttons";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ViewSceneDialogConfirmationTextProps {
	text: string;
}
export function ViewSceneDialogConfirmationText({
	text,
}: ViewSceneDialogConfirmationTextProps) {
	const store = useViewSceneDialogConfirmationTextStore((store) => store);
	const router = useRouter();
	return (
		<Dialog open={store.state.isOpen}>
			<DialogContent hideCloseButton className="sm:max-w-screen-md">
				<DialogHeader>
					<DialogTitle>Resposta certa!</DialogTitle>
					<div className="h-4" />
					<Typography variant="largeText" weight="normal">
						{text}
					</Typography>
					<div className="h-10" />
					<ViewSceneShareButtons />
					<div className="h-5" />
					<div className="flex items-center w-full gap-4">
						<Button
							asChild
							variant="default"
							size="lg"
							className="w-full"
							onClick={() => {
								store.actions.closeDialog();
								router.push("/");
							}}
						>
							<Link href="/">Crie seu próprio cenário</Link>
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="w-full"
							onClick={() => store.actions.closeDialog()}
						>
							Reiniciar
						</Button>
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
