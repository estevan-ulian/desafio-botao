"use client";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Gif } from "./gif";
import { useFormStepThree } from "../hooks/use-form-step-three";
import poweredByGiphy from "@/shared/assets/images/powered_by_giphy.gif";

export function SearchGifs(props: ReturnType<typeof useFormStepThree>) {
    const {
        info,
        isLoading,
        error,
        selectedGif,
        searchTerm,
        isSearchOpen,
        handleSearchChange,
        handleGifSelect,
        handleSearchAgain,
    } = props;
    return (
        <div className="w-full">
            {!selectedGif && (
                <Card className="w-full">
                    <CardContent className="p-4">
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="Pesquisar GIFs divertidos..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="pr-10"
                            />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        {isSearchOpen && (
                            <div className="mt-4 flex flex-col gap-2 w-full">
                                {error && (
                                    <div className="col-span-3 text-red-500">
                                        Ocorreu um erro ao carregar os GIFs.
                                        Tente novamente mais tarde.
                                    </div>
                                )}
                                {isLoading && searchTerm && (
                                    <div className="col-span-3">
                                        Carregando gifs...
                                    </div>
                                )}
                                <div className="columns-2 md:columns-3 gap-4 space-y-4">
                                    {info?.map((gif) => (
                                        <Gif
                                            key={gif.id}
                                            gif={gif}
                                            onClick={() => handleGifSelect(gif)}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}
            {selectedGif && (
                <div className="mt-8 text-center">
                    <p className="mb-4 text-lg font-semibold">
                        Você escolheu este GIF:
                    </p>
                    <img
                        src={selectedGif.images.original.url}
                        alt={selectedGif.title}
                        width={selectedGif.images.downsized.width}
                        height={selectedGif.images.downsized.height}
                        className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
                    />
                    <Button
                        className="mt-4"
                        variant="secondary"
                        onClick={handleSearchAgain}
                    >
                        Buscar novamente
                    </Button>
                </div>
            )}
            <a href="https://giphy.com/" target="_blank" rel="noreferrer">
                <picture>
                    <source
                        srcSet={poweredByGiphy.src}
                        width={200}
                        height={42}
                    />
                    <img
                        src={poweredByGiphy.src}
                        alt="Demonstração do jogo Desafio do Botão"
                        className="w-full max-w-[200px] ml-auto mt-2 rounded-lg"
                        loading="eager"
                    />
                </picture>
            </a>
        </div>
    );
}
