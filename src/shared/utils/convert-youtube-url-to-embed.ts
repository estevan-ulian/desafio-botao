export function convertYoutubeUrlToEmbed(url: string) {
	const urlObj = new URL(url);

	if (urlObj.hostname.includes("youtube.com") && urlObj.searchParams.get("v")) {
		const videoId = urlObj.searchParams.get("v");
		return `https://www.youtube.com/embed/${videoId}`;
	} else if (urlObj.hostname === "youtu.be") {
		const videoId = urlObj.pathname.slice(1);
		return `https://www.youtube.com/embed/${videoId}`;
	} else {
		return null;
	}
}
