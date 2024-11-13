import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/components/ui/form";
import { useFormStepOne } from "../hooks/use-form-step-one";
import { Input } from "@/shared/components/ui/input";
import { StepActions } from "../../step-actions";

export function FormStepOne(methods: ReturnType<typeof useFormStepOne>) {
	const { form, onSubmit } = methods;

	return (
		<Form {...form}>
			<form onSubmit={onSubmit}>
				<FormField
					name="data.question"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Pergunta</FormLabel>
							<FormControl>
								<Input
									placeholder="Ex.: Você aceita namorar comigo?"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<StepActions />
			</form>
		</Form>
	);
}
