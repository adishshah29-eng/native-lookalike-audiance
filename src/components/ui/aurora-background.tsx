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
          "relative flex flex-col h-[100vh] items-center justify-center bg-[#1C1C1C] text-white transition-bg",
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl opacity-90 animate-[pulse_12s_ease-in-out_infinite]" />
          <div className="absolute -left-12 top-[20%] h-[28rem] w-[28rem] rounded-full bg-amber-700/8 blur-3xl opacity-80" />
          <div className="absolute right-0 bottom-8 h-[32rem] w-[32rem] rounded-full bg-stone-700/15 blur-3xl opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,166,35,0.08),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(245,166,35,0.05),_transparent_25%)]" />
        </div>
        {children}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      </div>
    </main>
  );
};
