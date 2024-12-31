export interface IHttpError {
    name: string;
    message: string;
    status: number;
    duration: number;
    details: string[];
}
