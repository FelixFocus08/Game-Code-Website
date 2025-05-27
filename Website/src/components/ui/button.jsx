import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSettings } from "@/contexts/SettingsContext";
import { playClickSound } from "@/lib/soundUtils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 btn-primary-hover",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground btn-outline-hover",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 btn-secondary-hover",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-md px-10 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const defaultButtonMotionProps = {
  whileHover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
};

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, motionProps, onClick, ...props }, ref) => {
    const { settings } = useSettings();
    const Comp = asChild ? Slot : "button";
    const MotionComp = motion(Comp);

    const resolvedMotionProps = motionProps !== undefined ? motionProps : defaultButtonMotionProps;

    const handleClick = (event) => {
      if (settings.buttonSoundsEnabled) {
        playClickSound();
      }
      if (onClick) {
        onClick(event);
      }
    };

    return (
      <MotionComp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        {...resolvedMotionProps}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };