import { IHttpClient } from "@/shared/services/http-client/repository/http-client-repository";
import { IGiphyResponse } from "../types/giphy-type";
import { IHttpResponse } from "@/shared/services/http-client/repository/http-response-repository";

interface IGiphyService {
	search: (q: string) => Promise<IHttpResponse<IGiphyResponse>>;
}

export function GiphyService(api: IHttpClient): IGiphyService {
	return {
		search: async (q: string) => {
			const httpResponse = await api.request<undefined, IGiphyResponse>({
				path: `/gifs/search?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY!}&limit=10&q=${q}`,
			});
			return httpResponse;
		},
	};
}
