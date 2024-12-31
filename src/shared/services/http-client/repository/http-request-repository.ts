import { IHttpMethod } from "./http-method-repository";

export interface IHttpRequest<B> {
    path: string;
    method?: IHttpMethod;
    headers?: Record<string, string>;
    body?: B;
}
