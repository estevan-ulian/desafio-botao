import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
    return (
        <header className="bg-primary">
            <div className="max-w-screen-xl mx-auto max-sm:pt-2 px-4 h-24 w-full flex flex-wrap items-center justify-center md:justify-between">
                <Link href="/" className="relative">
                    <h1 className="select-none text-sm text-center md:text-lg text-background font-bold border border-background py-2 px-4 rounded-md dark:border-foreground dark:text-foreground">
                        Desafio do Botão
                    </h1>
                    <img
                        src="/mouse-cursor.svg"
                        className="w-4 h-4 scale-x-[-1] absolute -right-1 bottom-2"
                    />
                </Link>
                <nav>
                    <ul className="flex gap-2 md:gap-4">
                        <li>
                            <Button
                                asChild
                                variant="link"
                                className="text-background dark:text-foreground"
                            >
                                <a href="/#como-funciona" className="">
                                    Como funciona?
                                </a>
                            </Button>
                        </li>
                        <li>
                            <Button
                                asChild
                                variant="link"
                                className="text-background dark:text-foreground"
                            >
                                <a href="/#cenarios-recentes">Recentes</a>
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
