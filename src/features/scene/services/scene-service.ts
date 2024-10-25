import { HttpClient } from "@/services/http/http-client";

import { ISceneService } from "../types/scene-service-types";
import { IQuestion } from "../types/question-type";
import {
	ICreateQuestionRequestBody,
	ICreateQuestionResponse,
} from "@/shared/types/create-question-requesty-body";

export class SceneService implements ISceneService {
	constructor(readonly api: HttpClient) {
		if (!api) throw new TypeError("Instance API Adapter is required");
	}

	async create(
		scenario: ICreateQuestionRequestBody,
	): Promise<ICreateQuestionResponse> {
		const httpResponse = await this.api.request<
			ICreateQuestionRequestBody,
			ICreateQuestionResponse
		>({
			method: "POST",
			url: "/scene",
			body: scenario,
		});

		return httpResponse.data;
	}

	async findOne(id: string): Promise<IQuestion> {
		const httpResponse = await this.api.request<null, IQuestion>({
			method: "GET",
			url: `/scene?${id}`,
		});

		return httpResponse.data;
	}
}
