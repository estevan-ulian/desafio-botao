import { HttpClient } from "@/shared/services/http/http-client";
import { IQuestion } from "../types/question-type";
import { ISceneService } from "../types/scene-service-types";

export class SceneService implements ISceneService {
	constructor(readonly api: HttpClient) {
		if (!api) throw new TypeError("Instance API Adapter is required");
	}

	async create(scene: IQuestion): Promise<{ id: string }> {
		const httpResponse = await this.api.request<IQuestion, { id: string }>({
			method: "POST",
			url: "/scene",
			body: scene,
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
