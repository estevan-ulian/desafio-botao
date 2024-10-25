import { PrismaClient } from "@prisma/client";

export class PrismaClientService {
	constructor(readonly prisma: PrismaClient) {}

	static create(prisma: PrismaClient) {
		return new PrismaClientService(prisma);
	}
}
