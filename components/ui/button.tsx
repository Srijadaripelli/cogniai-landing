import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-2xl font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";
    const variants = {
      default: "bg-primary text-white hover:opacity-90",
      ghost: "bg-transparent hover:bg-white/5",
      outline: "border border-white/10 hover:bg-white/5"
    } as const;
    const sizes = { sm: "h-9 px-3 text-sm", md: "h-11 px-5", lg: "h-12 px-6 text-lg" } as const;
    return (<button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />);
  }
);
Button.displayName = "Button";
