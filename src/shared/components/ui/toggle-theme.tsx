"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";

export function ToggleTheme() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="p-0 h-auto text-muted-foreground"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] dark:absolute dark:invisbile dark:opacity-0 dark:size-0" />
                    <Moon className="h-[1.2rem] w-[1.2rem] absolute invisible opacity-0 dark:static dark:visible dark:opacity-100" />
                    Alternar Tema
                    <span className="sr-only">Alternar tema</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Claro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Escuro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    Sistema
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
