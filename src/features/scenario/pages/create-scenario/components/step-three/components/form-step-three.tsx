import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/components/ui/form";
import { useFormStepThree } from "../hooks/use-form-step-three";
import { StepActions } from "../../step-actions";
import {
	ButtonGroup,
	ButtonGroupItem,
} from "@/shared/components/ui/button-group";
import { Image, ImagePlay, LetterText, Play } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { ContentTypeDescription } from "./content-type-description";
import { SearchGifs } from "./search-gifs";

export const FormStepThree = (methods: ReturnType<typeof useFormStepThree>) => {
	const { form, onSubmit } = methods;

	const watchType = form.watch("data.confirmation.confirmationType");
	const isVideo = watchType === "video";
	const isGif = watchType === "gif";
	const isImage = watchType === "image";
	const isText = watchType === "text";

	return (
		<Form {...form}>
			<form onSubmit={onSubmit} className="flex flex-col gap-5">
				<FormField
					name="data.confirmation.confirmationType"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Qual tipo de mensagem será exibida após o usuário clicar no{" "}
								<strong>botão permitido?</strong>
							</FormLabel>
							<FormControl>
								<ButtonGroup
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<ButtonGroupItem
											label="Texto"
											value="text"
											icon={<LetterText />}
											description={
												isText
													? "Uma mensagem de texto será exibida na tela"
													: ""
											}
										/>
									</FormControl>
									<FormControl>
										<ButtonGroupItem
											label="Imagem"
											value="image"
											icon={<Image />}
											description={
												isImage ? "Uma imagem será exibida na tela" : ""
											}
										/>
									</FormControl>
									<FormControl>
										<ButtonGroupItem
											label="GIF animado"
											value="gif"
											icon={<ImagePlay />}
											description={
												isGif ? "Um GIF animado será exibido na tela" : ""
											}
										/>
									</FormControl>
									<FormControl>
										<ButtonGroupItem
											label="Vídeo"
											value="video"
											icon={<Play />}
											description={
												isVideo ? "Um vídeo será exibido na tela" : ""
											}
										/>
									</FormControl>
								</ButtonGroup>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{watchType && !isGif && (
					<FormField
						control={form.control}
						name="data.confirmation.confirmationContent"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Conteúdo</FormLabel>
								<FormControl>
									<Input
										placeholder={
											isImage
												? "Insira o link da imagem"
												: isVideo
													? "Insira o link do vídeo"
													: isText
														? "Digite uma mensagem"
														: ""
										}
										{...field}
									/>
								</FormControl>
								<ContentTypeDescription control={form.control} />
								<FormMessage />
							</FormItem>
						)}
					/>
				)}
				{isGif && <SearchGifs {...methods} />}
				<StepActions />
			</form>
		</Form>
	);
};
