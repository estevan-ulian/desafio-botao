"use client";
import { useCreateSceneForm } from "../hooks/use-create-scene-form";
import { ICreateSceneActionResponse } from "../types/scene-actions-type";
import { IQuestionCreateBody } from "../types/question-type";
import { CreateSceneForm } from "./create-scene-form";

interface FormViewProps {
	serverAction: (
		data: IQuestionCreateBody,
	) => Promise<ICreateSceneActionResponse>;
}

export function FormView({ serverAction }: FormViewProps) {
	const methods = useCreateSceneForm(serverAction);

	return <CreateSceneForm {...methods} />;
}
