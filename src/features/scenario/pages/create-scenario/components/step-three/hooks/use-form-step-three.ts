import React from "react";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodIssueCode } from "zod";

import { useCreateScenarioFormStore } from "../../../hooks/use-create-scenario-form-store";
import { IHttpError } from "@/shared/services/http-client/repository/http-error-repository";
import { IGiphyData } from "@/features/scenario/types/giphy-type";
import { GiphyService } from "@/features/scenario/services/giphy-service";
import { HttpClient } from "@/shared/services/http-client";

const formStepThreeSchema = z.object({
    data: z
        .object({
            confirmation: z.object({
                confirmationType: z.enum(["", "text", "image", "video", "gif"]),
                confirmationContent: z.string(),
            }),
        })
        .superRefine((arg, ctx) => {
            const isVideo = arg.confirmation.confirmationType === "video";
            const isText = arg.confirmation.confirmationType === "text";
            const isGif = arg.confirmation.confirmationType === "gif";

            if (!arg.confirmation.confirmationType) {
                return ctx.addIssue({
                    code: ZodIssueCode.custom,
                    message: "Selecione o tipo de confirmação",
                    path: ["confirmation", "confirmationType"],
                });
            }

            if (isText && arg.confirmation.confirmationContent.length < 10) {
                return ctx.addIssue({
                    code: ZodIssueCode.custom,
                    message: "O texto deve ter no mínimo 10 caracteres",
                    path: ["confirmation", "confirmationContent"],
                });
            }

            if (
                !isText &&
                !isGif &&
                !arg.confirmation.confirmationContent.startsWith("https://")
            ) {
                return ctx.addIssue({
                    code: ZodIssueCode.custom,
                    message: "Insira um endereço de URL válido!",
                    path: ["confirmation", "confirmationContent"],
                });
            }

            if (isVideo) {
                if (
                    !arg.confirmation.confirmationContent.includes(
                        "youtube.com"
                    ) &&
                    !arg.confirmation.confirmationContent.includes("youtu.be")
                ) {
                    return ctx.addIssue({
                        code: ZodIssueCode.custom,
                        message: "Somente vídeos do YouTube são permitos!",
                        path: ["confirmation", "confirmationContent"],
                    });
                }
            }
        }),
});

export type FormStepThreeData = z.infer<typeof formStepThreeSchema>;

export function useFormStepThree() {
    const { formData, next } = useCreateScenarioFormStore();
    const form = useForm<FormStepThreeData>({
        defaultValues: {
            data: {
                confirmation: formData.confirmation,
            },
        },
        resolver: zodResolver(formStepThreeSchema),
    });

    console.log(form.formState.errors);

    const [searchTerm, setSearchTerm] = React.useState("");
    const [selectedGif, setSelectedGif] = React.useState<
        IGiphyData | undefined
    >(undefined);
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);
    const [info, setInfo] = React.useState<IGiphyData[] | undefined>(undefined);
    const [error, setError] = React.useState<Error | null>(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const httpClient = HttpClient(
        axios,
        process.env.NEXT_PUBLIC_GIPHY_BASE_URL!
    );
    const giphyService = GiphyService(httpClient);

    const handleSearchChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSearchTerm(event.target.value);
        setIsSearchOpen(true);
    };

    const handleGifSelect = (
        gif: React.SetStateAction<IGiphyData | undefined>
    ) => {
        setSelectedGif(gif);
        setIsSearchOpen(false);
    };

    const handleSearchAgain = () => {
        setSelectedGif(undefined);
        setIsSearchOpen(true);
    };

    React.useEffect(() => {
        if (searchTerm.length < 3) return;

        if (selectedGif) {
            return form.setValue(
                "data.confirmation.confirmationContent",
                selectedGif.images.downsized.url
            );
        }

        const fetchGifs = async () => {
            if (searchTerm) {
                setIsLoading(true);
                try {
                    const { data } = await giphyService.search(searchTerm);
                    setInfo(data?.data);
                } catch (error: unknown) {
                    const err = error as IHttpError;
                    setError(err);
                } finally {
                    setIsLoading(false);
                }
            }
        };
        fetchGifs();
    }, [searchTerm, selectedGif]);

    const onSubmit = form.handleSubmit(({ data }: FormStepThreeData) => {
        if (form.getValues("data.confirmation.confirmationType") === "gif") {
            if (!selectedGif)
                return form.setError("data.confirmation.confirmationType", {
                    message: "Pesquise e selecione um GIF",
                });
        }
        next(data);
    });

    return {
        form,
        searchTerm,
        isSearchOpen,
        selectedGif,
        info,
        error,
        isLoading,
        onSubmit,
        handleSearchChange,
        setIsSearchOpen,
        handleGifSelect,
        handleSearchAgain,
    };
}
