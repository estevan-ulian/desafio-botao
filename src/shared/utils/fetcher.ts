import { IHttpClient } from "../services/http-client/repository/http-client-repository";
import { IHttpResponse } from "../services/http-client/repository/http-response-repository";

export const fetcher = async <R>(
	api: IHttpClient,
	path: string,
): Promise<IHttpResponse<R>> => {
	const response = await api.request<any, R>({
		path: path,
	});
	return response;
};
