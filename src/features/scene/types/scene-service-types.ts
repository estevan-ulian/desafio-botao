import { IQuestion } from "./question-type";

export interface ISceneService {
	create: (scenario: IQuestion) => Promise<{ id: string }>;
	findOne: (id: string) => Promise<IQuestion>;
}
