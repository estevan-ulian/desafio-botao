import { Typography } from "@/shared/components/ui/typography";
import { YoutubeEmbed } from "@/shared/components/youtube-embed";

interface RenderConfirmationProps {
	confirmationContent: string;
	confirmationType: string;
}

export function RenderConfirmation({
	confirmationContent,
	confirmationType,
}: RenderConfirmationProps) {
	switch (confirmationType) {
		case "text":
			return <Typography>{confirmationContent}</Typography>;
		case "video":
			return <YoutubeEmbed url={confirmationContent} />;
		default:
			return (
				<img
					src={confirmationContent}
					alt="Confirmação"
					width={420}
					height={420}
					className="w-full h-auto max-w-full md:max-h-80 object-contain"
				/>
			);
	}
}
