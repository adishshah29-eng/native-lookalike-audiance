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
        {/* Premium dark gradient background */}
        <div 
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 40%, rgba(255,34,34,0.05) 0%, transparent 50%)"
          }}
        />

        {/* Tall, smooth blend into white — must cover at least 350px */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: "350px",
            background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.8) 80%, #ffffff 100%)",
          }}
        />

        {/* Children placed after so they stack cleanly over the gradient */}
        {children}
      </div>
    </main>
  );
};
