"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ClickToCopy({
  children,
  clipboardContent,
}: {
  children: React.ReactNode;
  clipboardContent: string;
}) {
  const handleClickToCopy = async () => {
    await navigator.clipboard.writeText(clipboardContent);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={handleClickToCopy}>{children}</TooltipTrigger>
        <TooltipContent>
          <p>Click to copy to clipboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
