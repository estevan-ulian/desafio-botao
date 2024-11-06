import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";
import { Slot } from "@radix-ui/react-slot";

const typographyVariants = cva(
	"text-foreground tracking-tight cursor-default",
	{
		variants: {
			variant: {
				h1: "text-5xl lg:text-6xl font-bold",
				h2: "text-4xl lg:text-5xl font-bold",
				h3: "text-3xl lg:text-4xl font-bold",
				h4: "text-2xl lg:text-3xl font-bold",
				h5: "text-xl lg:text-2xl font-bold",
				h6: "text-lg lg:text-xl font-bold",
				strong: "font-bold",
				em: "italic",
				code: "font-mono",
				p: "leading-7 [&:not(:last-child)]:mb-6",
				blockquote: "mt-6 border-l-2 pl-6 italic",
				ul: "my-6 ml-6 list-disc [&>li]:mt-2",
				inlineCode:
					"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
				lead: "text-xl text-muted-foreground",
				regularText: "text-base",
				largeText: "text-lg font-semibold",
				smallText: "text-sm font-medium leading-none",
				mutedText: "text-sm text-muted-foreground",
			},
			colors: {
				default: "text-foreground",
				primary: "text-primary",
				secondary: "text-secondary",
				destructive: "text-destructive",
				muted: "text-muted-foreground",
			},
			weight: {
				default: "font-bold",
				normal: "font-normal",
				medium: "font-medium",
				extrabold: "font-extrabold",
			},
			defaultVariants: {
				variant: "p",
				weight: "normal",
			},
		},
	},
);

type VariantPropType = VariantProps<typeof typographyVariants>;

const variantElementMap: Record<
	NonNullable<VariantPropType["variant"]>,
	string
> = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	p: "p",
	code: "code",
	em: "em",
	strong: "strong",
	blockquote: "blockquote",
	inlineCode: "code",
	largeText: "div",
	regularText: "div",
	smallText: "small",
	lead: "p",
	mutedText: "p",
	ul: "ul",
};

export interface TypographyProps
	extends React.HTMLAttributes<HTMLElement>,
		VariantProps<typeof typographyVariants> {
	asChild?: boolean;
	as?: string;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
	({ variant, colors, weight, as, asChild, className, ...props }, ref) => {
		const Comp = asChild
			? Slot
			: (as ?? (variant ? variantElementMap[variant] : undefined) ?? "div");
		return (
			<Comp
				className={cn(
					typographyVariants({ variant, weight, colors, className }),
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
