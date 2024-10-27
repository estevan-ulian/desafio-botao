import { IHttpRequest } from "./http-request-repository";
import { IHttpResponse } from "./http-response-repository";

export interface IHttpClient {
	request<B, R>(request: IHttpRequest<B>): Promise<IHttpResponse<R>>;
}
