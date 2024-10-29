import { Button } from "@/shared/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/shared/components/ui/drawer";
import Link from "next/link";
import { ViewSceneShareButtons } from "./view-scene-share-buttons";
import { Typography } from "@/shared/components/ui/typography";

interface ViewSceneDrawerConfirmationProps {
	text: string;
	confirmationText: string;
}

export function ViewSceneDrawerConfirmation({
	text,
	confirmationText,
}: ViewSceneDrawerConfirmationProps) {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button size="lg">{text}</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="pt-20">
					<DrawerTitle>Resposta certa!</DrawerTitle>
					<DrawerDescription asChild className="p-4 border mt-2 rounded-sm">
						<Typography variant="largeText" weight="medium">
							{confirmationText}
						</Typography>
					</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter className="gap-5 pb-32">
					<ViewSceneShareButtons />
					<div className="flex flex-row gap-4 md:gap-10">
						<Button asChild className="w-full">
							<Link href="/">Criar um cenário</Link>
						</Button>
						<DrawerClose asChild className="w-full">
							<Button
								variant="outline"
								onClick={() => {
									window.location.reload();
								}}
							>
								Reiniciar
							</Button>
						</DrawerClose>
					</div>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
