"use server";

import { prisma } from "@/shared/services/prisma";
import { scenarioService } from "../services/scenario-service";
import { IGetLastTenScenariosServiceResponse } from "../types/scenario-actions-type";

const service = scenarioService(prisma);

export async function getLastTenScenariosAction(): Promise<IGetLastTenScenariosServiceResponse> {
    return await service.findLastTen();
}
