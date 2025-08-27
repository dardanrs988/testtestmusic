"use client";

import { useState, useCallback } from "react";

interface UseCopyToClipboardOptions {
  timeout?: number;
}

export function useCopyToClipboard({ timeout = 2000 }: UseCopyToClipboardOptions = {}) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(
    (text: string) => {
      if (typeof window === "undefined" || !navigator.clipboard?.writeText) {
        console.warn("Clipboard not available");
        return;
      }

      navigator.clipboard.writeText(text).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), timeout);
      });
    },
    [timeout]
  );

  return { isCopied, copy };
}
