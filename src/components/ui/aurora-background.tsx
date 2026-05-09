"use client";
import { cn } from "../../lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col items-center justify-center bg-black text-white transition-bg",
          className
        )}
        style={{ minHeight: "110vh" }}
        {...props}
      >
        {/* Tall, smooth blend into white — must cover at least 280px */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: "180px",
            background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.7) 70%, #ffffff 100%)",
          }}
        />

        {/* Children placed after so they stack cleanly over the gradient */}
        {children}
      </div>
    </main>
  );
};
