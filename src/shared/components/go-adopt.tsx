import Script from "next/script";

export function GoAdopt() {
	return (
		<Script
			src="//tag.goadopt.io/injector.js?website_code=70a7586a-bcc3-40ce-b8e6-b65fc3d687cf"
			strategy="beforeInteractive"
			className="adopt-injector"
		/>
	);
}
