"use client";

import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
}

export function CodeBlock({ code, className, ...props }: CodeBlockProps) {
  const { isCopied, copy } = useCopyToClipboard();

  return (
    <div
      className={cn(
        "relative rounded-lg bg-card/50 p-4 border",
        className
      )}
      {...props}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-7 w-7"
        onClick={() => copy(code)}
      >
        {isCopied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
        <span className="sr-only">Copy to clipboard</span>
      </Button>
      <pre className="font-code text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}
