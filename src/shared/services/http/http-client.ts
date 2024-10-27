import { AxiosInstance, isAxiosError } from "axios";

import { IHttpClient } from "./repository/http-client-repository";
import { IHttpRequest } from "./repository/http-request-repository";
import { IHttpResponse } from "./repository/http-response-repository";

export class HttpClient implements IHttpClient {
	private constructor(
		private api: AxiosInstance,
		private baseUrl: string,
	) {
		if (!this.baseUrl) throw new TypeError("baseUrl is required");
		if (!this.api) throw new TypeError("Instance API Adapter is required");
	}

	static create(api: AxiosInstance, baseUrl: string): HttpClient {
		return new HttpClient(api, baseUrl);
	}

	async request<B, R>(request: IHttpRequest<B>): Promise<IHttpResponse<R>> {
		const { method = "GET", url, body = {}, headers = {} } = request;
		const startTime = Date.now();
		const requestId = crypto.randomUUID();
		const enrichedHeaders = {
			...headers,
			"X-Request-Id": requestId,
		};
		try {
			const response = await this.api.request({
				url: this.formatUrl(url),
				method,
				headers: enrichedHeaders,
				data: body,
			});

			return {
				data: response.data,
				error: null,
			};
		} catch (error: unknown) {
			return Promise.reject(this.errorHandler(error, startTime, requestId));
		}
	}

	private errorHandler(
		error: unknown,
		startTime: number,
		requestId: string,
	): IHttpResponse<null> {
		const duration = this.formatMillisecondsToSeconds(Date.now() - startTime);
		const defaultErrorMessage = this.getErrorMessage();
		if (!isAxiosError(error)) {
			return {
				data: null,
				error: {
					name: "Unknown Error",
					message: defaultErrorMessage,
					status: 500,
					details: [
						`Error type: ${typeof error}`,
						`Raw message: ${JSON.stringify(error).slice(0, 200)}...`,
					],
					duration,
					requestId,
				},
			};
		}

		const { response, config } = error;
		const status = response?.status || error.status || 500;

		const friendlyMessage = this.getErrorMessage(status);

		return {
			data: null,
			error: {
				name: response?.statusText || "Unknown Error",
				message: friendlyMessage,
				status,
				details: [
					`Error type: AxiosError`,
					`Status: ${status}`,
					`URL: ${config?.url}`,
					`Method: ${config?.method}`,
					`Request headers RAW: ${JSON.stringify(config?.headers).slice(0, 100)}...`,
					`Response data RAW: ${JSON.stringify(response?.data).slice(0, 200)}...`,
					`Stack trace: ${error.stack?.split("\n").slice(0, 3).join("\n")}...`,
				],
				duration,
				requestId,
			},
		};
	}

	private formatUrl(path: string): string {
		return path.startsWith("/")
			? `${this.baseUrl}${path}`
			: `${this.baseUrl}/${path}`;
	}

	private formatMillisecondsToSeconds(milliseconds: number): number {
		return milliseconds / 1000;
	}

	private getErrorMessage(status?: number): string {
		switch (status) {
			case 400:
				return "Parece que houve um erro na sua solicitação. Por favor, verifique os dados enviados.";
			case 401:
				return "Você não está autorizado a acessar esta funcionalidade. Faça login e tente novamente.";
			case 403:
				return "Você não tem permissão para realizar esta ação.";
			case 404:
				return "O recurso solicitado não foi encontrado.";
			case 429:
				return "Você atingiu o limite de requisições. Por favor, tente novamente mais tarde.";
			case 500:
				return "Ocorreu um erro interno no servidor. Tente novamente mais tarde.";
			case 503:
				return "O serviço está temporariamente indisponível. Por favor, tente novamente em alguns minutos.";
			default:
				return "Ocorreu um erro. Por favor, tente novamente.";
		}
	}
}
