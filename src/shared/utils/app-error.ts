export class AppError extends Error {
	status: number;
	details?: any;

	constructor(name: string, message: string, status: number, details?: any) {
		super(message);
		this.name = name;
		this.message = message;
		this.status = status;
		this.details = details;
	}

	static badRequest(message = "Ocorreu um erro na requisição.", details?: any) {
		return new AppError("Bad Request", message, 400, details);
	}

	static notFound(message = "Recurso não encontrado.", details?: any) {
		return new AppError("Not Found", message, 404, details);
	}

	static internalServerError(
		message = "Ocorreu um erro interno no servidor.",
		details?: any,
	) {
		return new AppError("Internal Server Error", message, 500, details);
	}

	static unauthorized(message = "Acesso não autorizado.", details?: any) {
		return new AppError("Unauthorized", message, 401, details);
	}

	static forbidden(message = "Acesso proibido.", details?: any) {
		return new AppError("Forbidden", message, 403, details);
	}

	static conflict(message = "Conflito de recursos.", details?: any) {
		return new AppError("Conflict", message, 409, details);
	}

	static unprocessableEntity(
		message = "Entidade não processável.",
		details?: any,
	) {
		return new AppError("Unprocessable Entity", message, 422, details);
	}

	static tooManyRequests(message = "Muitas requisições.", details?: any) {
		return new AppError("Too Many Requests", message, 429, details);
	}

	static serviceUnavailable(message = "Serviço indisponível.", details?: any) {
		return new AppError("Service Unavailable", message, 503, details);
	}

	static gatewayTimeout(
		message = "Tempo de requisição esgotado.",
		details?: any,
	) {
		return new AppError("Gateway Timeout", message, 504, details);
	}

	static custom(name: string, message: string, status: number, details?: any) {
		return new AppError(name, message, status, details);
	}
}
