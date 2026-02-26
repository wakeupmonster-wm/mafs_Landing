import React from "react";
import { cn } from "@/lib/utils";

export default function Border({ children, className }) {
  return (
    <div
      className={cn(
        "bg-transparent p-1 sm:p-2 border border-cardBorder rounded-3xl lg:rounded-[28px]",
        className
      )}
    >
      {children}
    </div>
  );
}
