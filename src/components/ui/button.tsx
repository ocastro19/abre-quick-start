import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-hero text-primary-foreground font-semibold shadow-hero hover:shadow-elegant transform hover:scale-105 transition-smooth border border-gold/20",
        institutional: "bg-primary text-primary-foreground hover:bg-primary-light shadow-elegant font-medium",
        gold: "bg-gold text-gold-foreground hover:bg-gold/90 font-semibold shadow-card",
        "cta-primary": "w-full font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl min-h-[70px] text-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white",
        "cta-success": "w-full font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl min-h-[70px] text-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white",
        "cta-warning": "w-full font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl min-h-[70px] text-lg bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black",
        "cta-blue": "w-full font-bold rounded-3xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/25 min-h-[70px] text-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white",
        "cta-success": "w-full font-bold rounded-3xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl shadow-green-400/50 min-h-[70px] text-lg bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };