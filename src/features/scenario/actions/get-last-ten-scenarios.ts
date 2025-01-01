"use server";

import { prisma } from "@/shared/services/prisma";
import { scenarioService } from "../services/scenario-service";
import { IGetLastTenScenariosServiceResponse } from "../types/scenario-actions-type";
import { revalidateTag } from "next/cache";

const service = scenarioService(prisma);

export async function getLastTenScenariosAction(): Promise<IGetLastTenScenariosServiceResponse> {
    revalidateTag("scenario");
    return await service.findLastTen();
}
