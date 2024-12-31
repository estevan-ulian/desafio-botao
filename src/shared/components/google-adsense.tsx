import Script from "next/script";

type GoogleAdsenseProps = {
    pId: string;
};

export function GoogleAdsense({ pId }: GoogleAdsenseProps) {
    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
            crossOrigin="anonymous"
            strategy="beforeInteractive"
        />
    );
}
