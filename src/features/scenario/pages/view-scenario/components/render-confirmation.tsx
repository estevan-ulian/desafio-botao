import { Typography } from "@/shared/components/ui/typography";
import { YoutubeEmbed } from "@/shared/components/youtube-embed";
import poweredByGiphy from "@/shared/assets/images/powered_by_giphy.gif";

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
                <div>
                    <img
                        src={confirmationContent}
                        alt="Confirmação"
                        width={420}
                        height={420}
                        className="w-full h-auto max-w-full md:max-h-80 object-contain"
                    />
                    {confirmationType === "gif" && (
                        <a
                            href="https://giphy.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <picture>
                                <source
                                    srcSet={poweredByGiphy.src}
                                    width={200}
                                    height={42}
                                />
                                <img
                                    src={poweredByGiphy.src}
                                    alt="Demonstração do jogo Desafio do Botão"
                                    className="w-full max-w-[200px] mx-auto mt-2 rounded-lg"
                                    loading="eager"
                                />
                            </picture>
                        </a>
                    )}
                </div>
            );
    }
}
