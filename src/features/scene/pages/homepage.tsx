import { Footer } from "@/shared/components/footer";
import { Button } from "@/shared/components/ui/button";
import { Typography } from "@/shared/components/ui/typography";
import Image from "next/image";
import Link from "next/link";
import demoGif from "@/shared/assets/images/demo.gif";

export function Homepage() {
	return (
		<>
			<main className="flex-grow flex flex-col">
				<section className="w-full py-16 min-h-[65svh] bg-primary flex flex-col justify-center">
					<div className="max-w-screen-xl mx-auto w-full px-4 flex flex-col gap-10 md:flex-row items-center justify-center">
						<div className="w-full md:max-w-[50%]">
							<Typography
								variant="h1"
								className="text-background mb-2 dark:text-foreground"
							>
								Desafio do Botão
							</Typography>
							<Typography
								variant="p"
								weight="medium"
								className="text-secondary dark:text-foreground"
							>
								No Desafio do Botão, cada pergunta traz dois caminhos, mas
								apenas um botão pode ser clicado. Divirta-se com seus amigos!
							</Typography>
							<div className="flex flex-col md:flex-row gap-4">
								<Button
									variant="secondary"
									className="w-full"
									size="lg"
									asChild
								>
									<Link href="/cenario/criar">
										Confira os cenários mais recentes
									</Link>
								</Button>
								<Button
									variant="outline"
									className="w-full bg-transparent text-background dark:text-foreground dark:border-foreground dark:hover:bg-foreground dark:hover:text-background"
									size="lg"
									asChild
								>
									<Link href="/cenario/criar">Criar um cenário</Link>
								</Button>
							</div>
						</div>
						<div className="w-full md:max-w-[50%]">
							<Image
								src={demoGif}
								width={374}
								height={358}
								className="w-full md:max-w-[374px] mx-auto rounded-lg"
								alt="Demonstração"
								priority
							/>
						</div>
					</div>
				</section>
				<section className="w-full py-16 bg-secondary">
					<div className="max-w-screen-xl mx-auto w-full px-4">
						<Typography variant="h3" as="h2" className="text-center">
							Como funciona o Desafio do Botão
						</Typography>

						<div className="grid lg:grid-cols-3 gap-8 mt-10">
							<div className="flex flex-col gap-4 border border-border p-4 rounded-lg transition-all duration-150 hover:bg-background cursor-default">
								<div className="flex items-center gap-2">
									<Typography
										variant="h6"
										as="span"
										className="bg-primary text-background min-w-10 min-h-10 flex items-center justify-center rounded-full"
									>
										1.
									</Typography>
									<Typography variant="largeText" weight="default" as="h3">
										Crie uma Pergunta Divertida
									</Typography>
								</div>
								<Typography variant="p" className="text-sm">
									Abra seu cenário com uma pergunta que faça o jogador pensar.
									Pode ser uma dúvida curiosa, um dilema engraçado ou até uma
									pegadinha!
								</Typography>
							</div>
							<div className="flex flex-col gap-4 border border-border p-4 rounded-lg transition-all duration-150 hover:bg-background cursor-default">
								<div className="flex items-center gap-2">
									<Typography
										variant="h6"
										as="span"
										className="bg-primary text-background min-w-10 min-h-10 flex items-center justify-center rounded-full"
									>
										2.
									</Typography>
									<Typography variant="largeText" weight="default" as="h3">
										Adicione Duas Opções de Resposta
									</Typography>
								</div>
								<Typography variant="p" className="text-sm">
									Coloque duas respostas possíveis.{" "}
									<Typography variant="strong">Atenção:</Typography> um dos
									botões ficará se movendo para evitar o clique, enquanto o
									outro permanece estável, pronto para ser clicado. Quem tentar
									escolher o "errado" vai ter que correr atrás dele!
								</Typography>
							</div>
							<div className="flex flex-col gap-4 border border-border p-4 rounded-lg transition-all duration-150 hover:bg-background cursor-default">
								<div className="flex items-center gap-2">
									<Typography
										variant="h6"
										as="span"
										className="bg-primary text-background min-w-10 min-h-10 flex items-center justify-center rounded-full"
									>
										3.
									</Typography>
									<Typography variant="largeText" weight="default" as="h3">
										Personalize a Tela de Confirmação
									</Typography>
								</div>
								<Typography variant="p" className="text-sm">
									Depois de clicar no botão permitido, o jogador vê uma tela de
									confirmação personalizada, que pode ser um texto, imagem, GIF
									ou até um vídeo! Divirta-se criando finais surpreendentes para
									cada pergunta.
								</Typography>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-16">
					<div className="max-w-screen-md mx-auto w-full px-4">
						<div className="flex flex-col items-center justify-center gap-5">
							<Typography variant="h3" as="h2" className="text-center">
								Pronto para Criar Seu Próprio Desafio?
							</Typography>
							<Typography variant="p" className="text-center !m-0">
								Liberte sua imaginação e crie cenários hilários para desafiar os
								amigos! Agora é a sua vez de definir os desafios, enganar e
								surpreender quem tentar acertar. Personalize, divirta-se e
								compartilhe suas criações!
							</Typography>
							<Button asChild size="lg">
								<Link href="/cenario/criar">
									Crie um cenário agora e compartilhe com seus amigos
								</Link>
							</Button>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
