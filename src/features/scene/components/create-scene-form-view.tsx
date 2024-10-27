"use client";
import { useCreateSceneForm } from "../hooks/use-create-scene-form";
import { CreateSceneForm } from "./create-scene-form";

export function FormView() {
	const methods = useCreateSceneForm();

	return <CreateSceneForm {...methods} />;
}
