import { env } from "@/utils/env";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
	datasourceUrl: env.DATABASE_URL,
});
