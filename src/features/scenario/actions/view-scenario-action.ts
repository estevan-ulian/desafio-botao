"use server";

import { prisma } from "@/shared/services/prisma";
import { scenarioService } from "../services/scenario-service";
import { IGetScenarioServiceResponse } from "../types/scenario-actions-type";

const service = scenarioService(prisma);

export async function viewScenarioAction(
    id: string,
): Promise<IGetScenarioServiceResponse> {
    return await service.findOne(structuredClone(id));
}
