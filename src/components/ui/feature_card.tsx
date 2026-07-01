import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const featureCardVariants = cva(
  [
    "group",
    "flex",
    "flex-col",
    "items-center",

    "rounded-3xl",

    "border",

    "p-8",

    "shadow-md",

    "transition-all",
    "duration-300",

    "hover:-translate-y-2",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-border",

          "bg-gradient-to-b",
          "from-primary/5",
          "to-background",

          "hover:shadow-xl",
          "hover:shadow-primary/10",
        ],

        glass: [
          "border-white/20",

          "bg-white/10",

          "backdrop-blur-xl",

          "shadow-2xl",

          "hover:bg-white/15",

          "hover:shadow-primary/20",
        ],
      },

      size: {
        sm: "max-w-xs",
        md: "max-w-sm",
        lg: "max-w-md",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface FeatureCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featureCardVariants> {
  icon: React.ReactNode;

  title: string;

  description: string;

  iconClassName?: string;
}

export function FeatureCard({
  className,

  variant,

  size,

  icon,

  title,

  description,

  iconClassName,

  ...props
}: FeatureCardProps) {
  const isGlass = variant === "glass";

  return (
    <div
      className={cn(
        featureCardVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    >
      {/* Ícone */}

      <div
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110",
          isGlass
            ? "bg-white/15 text-white"
            : iconClassName ?? "bg-primary/10 text-primary"
        )}
      >
        {icon}
      </div>

      {/* Título */}

      <h3
        className={cn(
          "mt-6 text-center text-xl font-bold",
          isGlass ? "text-white" : "text-secondary"
        )}
      >
        {title}
      </h3>

      {/* Descrição */}

      <p
        className={cn(
          "mt-2 text-center leading-7",
          isGlass
            ? "text-white/80"
            : "text-muted-foreground"
        )}
      >
        {description}
      </p>
    </div>
  );
}