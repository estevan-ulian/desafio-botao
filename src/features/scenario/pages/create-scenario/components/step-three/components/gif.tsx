import { IGiphyData } from "@/features/scenario/types/giphy-type";
import React from "react";

type GifProps = {
	gif: IGiphyData;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const Gif = React.forwardRef<HTMLImageElement, GifProps>(
	({ gif, ...props }, ref) => {
		return (
			<>
				<img
					alt={gif.title}
					aria-label={gif.title}
					src={gif.images.fixed_height.url}
					width={gif.images.fixed_height.width}
					height={gif.images.fixed_height.height}
					ref={ref}
					className="w-full rounded-lg shadow-lg cursor-pointer h-auto max-w-full"
					{...props}
				/>
			</>
		);
	},
);

Gif.displayName = "Gif";
