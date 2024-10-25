import { NextRequest, NextResponse } from "next/server";

import { PrismaClientService } from "@/services/prisma";
import { prisma } from "@/services/prisma/prisma-client";
import { AppError } from "@/shared/utils/app-error";
import { ICreateQuestionRequestBody } from "@/shared/types/create-question-requesty-body";

const { prisma: database } = PrismaClientService.create(prisma);

export async function GET(request: NextRequest) {
	try {
		const id = request.nextUrl.searchParams.get("id");

		if (!id) {
			return Response.json(AppError.badRequest("Missing 'id'"), {
				status: 400,
			});
		}

		const scene = await database.question.findUnique({
			where: {
				id,
			},
			include: { answers: true },
		});

		if (!scene) {
			return NextResponse.json(AppError.notFound("Cenário não encontrado."), {
				status: 404,
			});
		}

		return NextResponse.json(scene, {
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(
			AppError.internalServerError(
				"Erro interno no servidor",
				JSON.stringify(error),
			),
			{ status: 500 },
		);
	}
}

export async function POST(request: NextRequest) {
	try {
		const body: ICreateQuestionRequestBody = await request.json();

		if (!body.data) {
			return NextResponse.json(AppError.badRequest("Missing 'data'"), {
				status: 400,
			});
		}

		if (!body.data.text) {
			return NextResponse.json(AppError.badRequest("Missing 'text'"), {
				status: 400,
			});
		}

		if (!body.data.confirmationText) {
			return NextResponse.json(
				AppError.badRequest("Missing 'confirmationText'"),
				{ status: 400 },
			);
		}

		if (!body.data.answers) {
			return NextResponse.json(AppError.badRequest("Missing 'answers'"), {
				status: 400,
			});
		}

		if (body.data.answers.length !== 2) {
			return NextResponse.json(
				AppError.badRequest("Answers must have 2 items"),
				{ status: 400 },
			);
		}

		const question = await database.question.create({
			data: {
				text: body.data.text,
				confirmationText: body.data.confirmationText,
				answers: {
					create: body.data.answers,
				},
			},
			include: { answers: true },
		});

		return NextResponse.json(
			{ id: question.id },
			{
				status: 201,
			},
		);
	} catch (error) {
		return NextResponse.json(
			AppError.internalServerError(
				"Erro interno no servidor",
				JSON.stringify(error),
			),
			{ status: 500 },
		);
	}
}
