export interface ICreateQuestionRequestBody {
	data: {
		id?: string;
		text: string;
		confirmationText: string;
		answers: {
			text: string;
			isNotClicable: boolean;
		}[];
	};
}

export interface ICreateQuestionResponse {
	id: string;
}
