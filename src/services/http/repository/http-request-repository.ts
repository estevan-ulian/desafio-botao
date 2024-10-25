import { IHttpMethod } from "./http-method-repository";

export interface IHttpRequest<B> {
    url: string;
    method?: IHttpMethod;
    headers?: Record<string, string>;
    body?: B;
}
