"use server";

import { prisma } from "@/shared/services/prisma";
import { sceneService } from "../services/scene-service";
import { IGetSceneServiceResponse } from "../types/scene-actions-type";

const service = sceneService(prisma);

export async function viewSceneAction(
	id: string,
): Promise<IGetSceneServiceResponse> {
	return await service.findOne(structuredClone(id));
}
