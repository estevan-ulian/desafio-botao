export interface IHttpError {
    name: string;
    message: string;
    status: number;
    requestId: string;
    duration: number;
    details: string[];
}
