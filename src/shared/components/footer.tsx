import Link from "next/link";

import { links } from "../constants/links";

import { Heart } from "lucide-react";
import { Typography } from "./ui/typography";
import { ToggleTheme } from "./ui/toggle-theme";

export function Footer() {
	return (
		<footer className="flex flex-col sm:flex-row gap-2 items-center justify-between max-w-screen-xl px-4 mx-auto w-full py-2">
			<ToggleTheme />
			<Typography variant="smallText" colors="muted">
				&copy; 2024 - Todos os direitos reservados
			</Typography>
			<Typography
				variant="smallText"
				colors="muted"
				className="flex gap-1 items-center"
			>
				Criado com <Heart className="size-4 text-destructive" /> por{" "}
				<Link target="_blank" href={links.author}>
					Estevan Ulian
				</Link>
			</Typography>
		</footer>
	);
}
