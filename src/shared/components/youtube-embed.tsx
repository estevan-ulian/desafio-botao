import { convertYoutubeUrlToEmbed } from "@/shared/utils/convert-youtube-url-to-embed";

export function YoutubeEmbed({ url }: { url: string }) {
    const urlConverted = convertYoutubeUrlToEmbed(url);

    if (!urlConverted) {
        return <div>Não foi possível carregar o vídeo.</div>;
    }

    const urlEmbed = new URL(urlConverted);
    urlEmbed.searchParams.set("autoplay", "1");
    urlEmbed.searchParams.set("loop", "1");
    urlEmbed.searchParams.set("controls", "0");
    urlEmbed.searchParams.set("rel", "0");

    return (
        <div className="max-w-full w-full">
            <iframe
                width={"100%"}
                height="315"
                src={urlEmbed.toString()}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
}
