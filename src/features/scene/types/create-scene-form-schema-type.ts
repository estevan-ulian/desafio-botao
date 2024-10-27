import { z } from "zod";
import { createSceneFormSchema } from "../schemas/create-scene-form-schema";

export type CreateSceneFormType = z.infer<typeof createSceneFormSchema>;
