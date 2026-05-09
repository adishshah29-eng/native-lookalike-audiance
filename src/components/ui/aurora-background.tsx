"use client";
import { cn } from "@/lib/utils";
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
          "relative flex flex-col h-[100vh] items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-sky-50 dark:bg-zinc-900 text-slate-950 transition-bg",
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl opacity-90 animate-[pulse_12s_ease-in-out_infinite]" />
          <div className="absolute -left-12 top-[20%] h-[28rem] w-[28rem] rounded-full bg-violet-400/20 blur-3xl opacity-80" />
          <div className="absolute right-0 bottom-8 h-[32rem] w-[32rem] rounded-full bg-sky-400/15 blur-3xl opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_22%)]" />
        </div>
        {children}
      </div>
    </main>
  );
};
