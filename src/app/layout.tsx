import type { Metadata } from "next";
import { WithContext, WebSite } from "schema-dts";
import { GoogleTagManager } from "@next/third-parties/google";
import { poppins as FontSans } from "@/shared/assets/fonts/poppins";
import { cn } from "@/shared/utils/cn";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/shared/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		default: "Desafio do Botão",
		template: "%s | Desafio do Botão",
	},
	authors: [
		{
			name: "Estevan Ulian",
			url: "https://estevanulian.com",
		},
	],
	description:
		"Crie seu próprio cenário e desafie seus amigos a clicarem no botão!",
	alternates: {
		canonical: process.env.NEXT_PUBLIC_SITE_URL,
		languages: {
			br: process.env.NEXT_PUBLIC_SITE_URL,
		},
	},
	openGraph: {
		title: "Desafio do Botão",
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-img.jpg`,
				width: 1200,
				height: 630,
				alt: "Desafio do Botão",
			},
		],
		description:
			"Crie seu próprio cenário e desafie seus amigos a clicarem no botão!",
		url: process.env.NEXT_PUBLIC_SITE_URL,
		locale: "pt_BR",
		type: "website",
		siteName: "Desafio do Botão",
		countryName: "Brasil",
	},
	twitter: {
		site: "@estevanulian",
		creator: "@estevanulian",
		title: "Desafio do Botão",
		description:
			"Crie seu próprio cenário e desafie seus amigos a clicarem no botão!",
		card: "summary_large_image",
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-img.jpg`,
				width: 1200,
				height: 630,
				alt: "Desafio do Botão",
			},
		],
	},
	robots: "index, follow",
};

const jsonLd: WithContext<WebSite> = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: process.env.NEXT_PUBLIC_SITE_URL,
	name: "Desafio do Botão",
	description:
		"Crie seu próprio cenário e desafie seus amigos a clicarem no botão!",
	inLanguage: "pt-BR",
};

const isProduction = process.env.NODE_ENV === "production";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen flex flex-col font-sans antialiased overflow-x-hidden",
					FontSans.variable,
				)}
			>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				{isProduction && (
					<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
				)}
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
