"use server";

import { HttpClient } from "@/shared/services/http/http-client";
import { env } from "@/shared/utils/env";
import axios from "axios";
import { SceneService } from "../services/scene-service";
import { IQuestion } from "../types/question-type";

const httpClient = HttpClient.create(axios, env.BASE_API_URL);
const sceneService = new SceneService(httpClient);

export async function createSceneAction(
	data: IQuestion,
): Promise<{ id: string }> {
	return await sceneService.create(data);
}
