import { AxiosInstance, isAxiosError } from "axios";

import { IHttpClient } from "./repository/http-client-repository";
import { IHttpRequest } from "./repository/http-request-repository";
import { IHttpResponse } from "./repository/http-response-repository";

export function HttpClient(api: AxiosInstance, baseUrl: string): IHttpClient {
	return {
		request: async <B, R>(req: IHttpRequest<B>): Promise<IHttpResponse<R>> => {
			const { method = "GET", path, body = {}, headers = {} } = req;
			const startTime = Date.now();
			const enrichedHeaders = {
				...headers,
			};
			try {
				const response = await api.request({
					url: formatUrl(baseUrl, path),
					method,
					headers: enrichedHeaders,
					data: body,
				});

				const data = {
					data: response.data,
					error: null,
				};

				// console.log(data);

				return data;
			} catch (error: unknown) {
				const err = errorHandler(error, startTime);
				// console.error(err);
				return Promise.reject(err);
			}
		},
	};
}

function errorHandler(error: unknown, startTime: number): IHttpResponse<null> {
	const duration = formatMillisecondsToSeconds(Date.now() - startTime);
	const defaultErrorMessage = getErrorMessage();
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
			},
		};
	}

	const { response, config } = error;
	const status = response?.status || error.status || 500;

	const friendlyMessage = getErrorMessage(status);

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
		},
	};
}

function formatUrl(baseUrl: string, path: string): string {
	return path.startsWith("/") ? `${baseUrl}${path}` : `${baseUrl}/${path}`;
}

function formatMillisecondsToSeconds(milliseconds: number): number {
	return milliseconds / 1000;
}

function getErrorMessage(status?: number): string {
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
