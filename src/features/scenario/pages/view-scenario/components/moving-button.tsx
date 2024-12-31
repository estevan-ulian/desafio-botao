"use client";

import { Button } from "@/shared/components/ui/button";
import { useState, useCallback } from "react";

export function MovingButton({ label }: { label: string }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [activated, setActivated] = useState(false);

    const moveButton = useCallback(() => {
        if (!activated) setActivated(true);
        const newX = Math.random() * (window.innerWidth - 100);
        const newY = Math.random() * (window.innerHeight - 40);
        setPosition({
            x: newX,
            y: newY,
        });
    }, [activated]);

    return (
        <Button
            style={{
                left: position.x,
                top: position.y,
                position: activated ? "fixed" : "static",
                zIndex: activated ? "10" : undefined,
            }}
            className="transition-all duration-300 ease-in-out cursor-default"
            onTouchStart={moveButton}
            onMouseOver={moveButton}
            variant="outline"
            size="lg"
        >
            {label}
        </Button>
    );
}
