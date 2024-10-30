"use server";

import { prisma } from "@/shared/services/prisma";
import { sceneService } from "../services/scene-service";
import { IQuestionCreateBody } from "../types/question-type";
import { ICreateSceneActionResponse } from "../types/scene-actions-type";

const service = sceneService(prisma);

export async function createSceneAction(
	data: IQuestionCreateBody,
): Promise<ICreateSceneActionResponse> {
	return await service.create(structuredClone(data));
}
