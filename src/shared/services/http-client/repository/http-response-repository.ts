import { IHttpError } from "./http-error-repository";

export interface IHttpResponse<R> {
    data: R | null;
    error: IHttpError | null;
}
