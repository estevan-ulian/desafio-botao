export interface IQuestion {
	id: string;
	text: string;
	confirmationText: string;
	answers: IAnswer[];
}

export interface IAnswer {
	id: string;
	text: string;
	isNotClicable: boolean;
	questionId: string;
}
