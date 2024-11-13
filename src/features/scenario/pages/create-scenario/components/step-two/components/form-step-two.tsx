import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { StepActions } from "../../step-actions";
import { useFormStepTwo } from "../hooks/use-form-step-two";
import {
	ButtonGroup,
	ButtonGroupItem,
} from "@/shared/components/ui/button-group";

export function FormStepTwo(methods: ReturnType<typeof useFormStepTwo>) {
	const { form, onSubmit } = methods;

	return (
		<Form {...form}>
			<form onSubmit={onSubmit} className="flex flex-col gap-5">
				<div className="grid md:grid-cols-2 gap-4">
					<FormField
						name="data.answers.firstAnswer"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Resposta 1</FormLabel>
								<FormControl>
									<Input placeholder="Ex.: Sim, eu aceito!" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="data.answers.secondAnswer"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Resposta 2</FormLabel>
								<FormControl>
									<Input placeholder="Ex.: Jamais!" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div>
					<FormField
						name="data.answers.isNotClickable"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Selecione qual das duas respostas <strong>NÃO</strong> poderá
									ser clicada.
								</FormLabel>
								<FormControl>
									<ButtonGroup
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<ButtonGroupItem
											label={
												form.watch("data.answers.firstAnswer") || "Resposta 1"
											}
											value="firstAnswer"
											description={
												field.value === "firstAnswer"
													? "Esta resposta NÃO poderá ser clicada."
													: ""
											}
										/>
										<ButtonGroupItem
											label={
												form.watch("data.answers.secondAnswer") || "Resposta 2"
											}
											description={
												field.value === "secondAnswer"
													? "Esta resposta NÃO poderá ser clicada."
													: ""
											}
											value="secondAnswer"
										/>
									</ButtonGroup>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<StepActions />
			</form>
		</Form>
	);
}
