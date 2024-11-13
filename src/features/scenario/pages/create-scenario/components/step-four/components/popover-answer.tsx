import { Button } from "@/shared/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/shared/components/ui/popover";
import { Typography } from "@/shared/components/ui/typography";
import { Info } from "lucide-react";
import React from "react";

interface PopoverProps {
	message?: string | React.ReactNode;
}

export function PopoverAnswers({
	message = "Esta resposta não poderá ser clicada",
}: PopoverProps) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="ghost" size="icon" className="p-0 w-auto m-0 h-auto">
					<Info className="size-6" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80">{message}</PopoverContent>
		</Popover>
	);
}
