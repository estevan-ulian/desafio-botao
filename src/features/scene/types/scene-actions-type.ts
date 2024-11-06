import { IError } from "./error-type";
import { IQuestionModel } from "./question-type";

export interface ICreateSceneActionResponse {
	data: {
		id: string;
	} | null;
	error: IError | null;
}

export type IGetSceneServiceResponse = {
	data: IQuestionModel | null;
	error: IError | null;
};

export type IGetLastTenScenesServiceResponse = {
	data: IQuestionModel[] | null;
	error: IError | null;
};
