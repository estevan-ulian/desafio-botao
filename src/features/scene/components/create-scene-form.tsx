import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Typography } from "@/shared/components/ui/typography";
import { useCreateSceneForm } from "../hooks/use-create-scene-form";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
import { Textarea } from "@/shared/components/ui/textarea";
import { Loader } from "lucide-react";

export function CreateSceneForm(props: ReturnType<typeof useCreateSceneForm>) {
	const { form, onSubmit } = props;
	return (
		<Card>
			<CardHeader>
				<CardTitle asChild>
					<Typography variant="h4" as="h3">
						Criar um cenário
					</Typography>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={onSubmit} className="flex flex-col gap-4">
						<FormField
							control={form.control}
							name="data.text"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Qual é a pergunta?</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormDescription>
										Exemplo: Você aceita se casar comigo?
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex flex-col md:flex-row gap-4">
							<FormField
								control={form.control}
								name={`data.answers.first`}
								defaultValue=""
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel>Texto do Primeiro botão</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormDescription>Exemplo: Sim, eu aceito!</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name={`data.answers.second`}
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel>Texto do Segundo botão</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormDescription>Exemplo: Jamais!</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Typography variant="h5" as="h4">
								Qual botão NÃO poderá ser clicado?
							</Typography>
							<FormField
								control={form.control}
								name="data.answers.isNotClickable"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<RadioGroup
												onValueChange={field.onChange}
												defaultValue={field.value}
												{...field}
												className="flex gap-4"
											>
												<FormItem className="flex items-center space-x-1 space-y-0">
													<FormControl>
														<RadioGroupItem value="first" />
													</FormControl>
													<FormLabel className="font-normal">
														{form.watch("data.answers.first") ||
															"Primeiro botão"}
													</FormLabel>
												</FormItem>
												<FormItem className="flex items-center space-x-1 space-y-0">
													<FormControl>
														<RadioGroupItem value="second" />
													</FormControl>
													<FormLabel className="font-normal">
														{form.watch("data.answers.second") ||
															"Segundo botão"}
													</FormLabel>
												</FormItem>
											</RadioGroup>
										</FormControl>
										<FormDescription>
											O botão selecionado não poderá ser clicado.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							name="data.confirmationText"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Texto de confirmação</FormLabel>
									<FormControl>
										<Textarea
											{...field}
											placeholder="Exemplo: Você aceitou se casar comigo, TE AMO!"
										/>
									</FormControl>
									<FormDescription>
										Texto que será exibido após clicar no botão permitido.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							disabled={
								form.formState.isSubmitting || form.formState.isSubmitSuccessful
							}
						>
							{form.formState.isSubmitting ? (
								<>
									Gerando novo cenário...{" "}
									<Loader className="size-10 animate-spin" />
								</>
							) : (
								"Criar Cenário"
							)}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
