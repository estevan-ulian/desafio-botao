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
import { SocialShare } from "../../../../../shared/components/social-share";
import { RenderConfirmation } from "./render-confirmation";

interface DrawerConfirmationProps {
    text: string;
    confirmationType: string;
    confirmationContent: string;
}

export function DrawerConfirmation({
    text,
    confirmationType,
    confirmationContent,
}: DrawerConfirmationProps) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button size="lg">{text}</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="max-w-screen-lg mx-auto w-full">
                    <DrawerHeader className="md:pt-16 space-y-3">
                        <DrawerTitle className="text-center">
                            Resposta certa!
                        </DrawerTitle>
                        <DrawerDescription
                            asChild
                            className="p-4 border rounded-sm"
                        >
                            <RenderConfirmation
                                confirmationContent={confirmationContent}
                                confirmationType={confirmationType}
                            />
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter className="gap-5 md:pb-32">
                        <SocialShare />
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
                </div>
            </DrawerContent>
        </Drawer>
    );
}
