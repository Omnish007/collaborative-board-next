import {
    TooltipContent,
    TooltipTrigger
} from "@radix-ui/react-tooltip";
import {
    Tooltip,
    TooltipProvider
} from "./ui/tooltip";

export interface HintProps {
    label: string;
    children: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    sideOffset?: number;
    alighnOffset?: number;
}

export const Hint = ({
    children,
    label,
    alighnOffset,
    align,
    side,
    sideOffset
}: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    className="p-1 rounded-sm text-white bg-black border-black"
                    side={side}
                    align={align}
                    sideOffset={sideOffset}
                    alignOffset={alighnOffset}
                >
                    <p className="font-semibold capitalize text-[12px]">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
