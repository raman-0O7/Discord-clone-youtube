"use client";

import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";

interface ActionTooltipProps {
  label: string,
  children: React.ReactNode;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "left" | "bottom";
}

export const ActionTooltip = ({
  label,
  side,
  children,
  align,
} : ActionTooltipProps) => {
  return (
    <TooltipProvider >
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p className="font-semibold text-sm capitalize">
            {label.toLowerCase()}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}