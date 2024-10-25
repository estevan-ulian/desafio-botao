import { CreateQuestionRequestBody } from "@/types/create-question-requesty-body";
import { IQuestion } from "./question-type";

export interface ISceneService {
	create: (scenario: CreateQuestionRequestBody) => Promise<{ id: string }>;
	findOne: (id: string) => Promise<IQuestion>;
}
