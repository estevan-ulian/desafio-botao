"use server";

import { prisma } from "@/shared/services/prisma";
import { scenarioService } from "../services/scenario-service";
import { ICreateScenarioBody } from "../types/scenario-type";
import { ICreateScenarioActionResponse } from "../types/scenario-actions-type";

const service = scenarioService(prisma);

export async function createScenarioAction(
	data: ICreateScenarioBody,
): Promise<ICreateScenarioActionResponse> {
	return await service.create(structuredClone(data));
}
