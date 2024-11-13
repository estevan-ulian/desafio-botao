import { Control, useWatch } from "react-hook-form";
import { FormStepThreeData } from "../hooks/use-form-step-three";
import { FormDescription } from "@/shared/components/ui/form";
import { Button } from "@/shared/components/ui/button";

export function ContentTypeDescription({
	control,
}: { control: Control<FormStepThreeData> }) {
	const { data } = useWatch({
		control,
		defaultValue: {
			data: {
				confirmation: {
					confirmationType: "",
				},
			},
		},
	});

	if (!data?.confirmation) return null;

	switch (data.confirmation.confirmationType) {
		case "text":
			return (
				<FormDescription>
					Exemplo: Eu já sabia que você me amava &lt;3
				</FormDescription>
			);
		case "image":
			return (
				<FormDescription>
					Pesquise uma imagem no{" "}
					<Button asChild variant="link" className="h-auto p-0">
						<a
							target="_blank"
							href="https://www.google.com/imghp?hl=pt-BR&authuser=0&ogbl"
						>
							Google Imagens
						</a>
					</Button>
					, copie o Endereço da Imagem e cole neste campo.
				</FormDescription>
			);
		case "gif":
			return (
				<FormDescription>
					Um GIF animado será exibido na tela após o usuário clicar no botão
					permitido. Exemplo:{" "}
					<Button asChild variant="link" className="h-auto p-0">
						<a
							target="_blank"
							href="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmFvb3ZyZndiYW9pb2c2NnNjb3hvNzhhYW43cHB4ZmsyOHJzd3ZlZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UO5elnTqo4vSg/giphy.webp"
						>
							https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmFvb3Z...
						</a>
					</Button>
				</FormDescription>
			);
		case "video":
			return (
				<FormDescription>
					Exemplo:{" "}
					<Button asChild variant="link" className="h-auto p-0">
						<a
							href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
							target="_blank"
						>
							https://www.youtube.com/watch?v=dQw4w9WgXcQ
						</a>
					</Button>
				</FormDescription>
			);
	}
}
