"use client";

import { cn } from "@/shared/utils/cn";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";

interface ButtonGroupItemProps {
    label: string;
    icon?: React.ReactNode;
    description?: string;
}

const ButtonGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Root
            className={cn("grid grid-cols-2 gap-5", className)}
            {...props}
            ref={ref}
        />
    );
});
ButtonGroup.displayName = RadioGroupPrimitive.Root.displayName;

const ButtonGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    ButtonGroupItemProps &
        React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, icon, label, description, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Item
            ref={ref}
            className={cn(
                "transition-all duration-200 bg-primary-foreground rounded-2xl data-[state=checked]:bg-muted-foreground data-[state=checked]:outline-none data-[state=checked]:text-background text-center p-4 h-full md:p-10 w-full focus:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className,
            )}
            {...props}
        >
            <div className="flex flex-col justify-center items-center">
                {icon && icon}
                <h4 className="text-lg font-bold pt-2">{label}</h4>
                <p className="text-xs text-center">{description}</p>
            </div>
        </RadioGroupPrimitive.Item>
    );
});
ButtonGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { ButtonGroup, ButtonGroupItem };
