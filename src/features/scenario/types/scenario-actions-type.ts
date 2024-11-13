import { IError } from "../../../shared/types/error-type";
import { IScenarioModel } from "./scenario-type";

export interface ICreateScenarioActionResponse {
	data: {
		id: string;
	} | null;
	error: IError | null;
}

export type IGetScenarioServiceResponse = {
	data: IScenarioModel | null;
	error: IError | null;
};

export type IGetLastTenScenariosServiceResponse = {
	data: IScenarioModel[] | null;
	error: IError | null;
};
