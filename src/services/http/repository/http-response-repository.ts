import { IHttpError } from "./http-error-repository";

export interface IHttpResponse<R> {
	data: R;
	error: IHttpError | null;
}
