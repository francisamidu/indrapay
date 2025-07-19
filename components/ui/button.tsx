import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus:ring-neutral-500 focus:ring-offset-white disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border border-black/20 bg-gradient-to-b from-teal-600 via-teal-700 to-teal-800 text-white shadow-[0_4px_16px_rgba(20,184,166,0.15),inset_0_1px_0_rgba(255,255,255,0.12)] hover:shadow-[0_6px_20px_rgba(20,184,166,0.2),inset_0_1px_0_rgba(255,255,255,0.18)] hover:from-teal-500 hover:via-teal-600 hover:to-teal-700 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_2px_8px_rgba(20,184,166,0.1)]",
        destructive:
          "border border-red-800/20 bg-gradient-to-b from-red-600 via-red-700 to-red-800 text-white shadow-[0_4px_16px_rgba(239,68,68,0.15),inset_0_1px_0_rgba(255,255,255,0.12)] hover:shadow-[0_6px_20px_rgba(239,68,68,0.2),inset_0_1px_0_rgba(255,255,255,0.18)] hover:from-red-500 hover:via-red-600 hover:to-red-700",
        outline:
          "border-2 border-teal-500/50 bg-transparent text-teal-400 shadow-sm hover:bg-teal-500/10 hover:border-teal-400 hover:text-teal-300",
        secondary:
          "border border-black/20 bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800 text-white shadow-[0_4px_16px_rgba(71,85,105,0.15),inset_0_1px_0_rgba(255,255,255,0.12)] hover:shadow-[0_6px_20px_rgba(71,85,105,0.2),inset_0_1px_0_rgba(255,255,255,0.18)] hover:from-slate-500 hover:via-slate-600 hover:to-slate-700",
        ghost: "hover:bg-teal-500/10 hover:text-teal-400 text-gray-400",
        link: "text-teal-400 underline-offset-4 hover:underline hover:text-teal-300",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
