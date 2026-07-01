import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const teacherPainCardVariants = cva(
  [
    "group",
    "flex",
    "flex-col",
    "items-center",

    "rounded-3xl",
    "border",
    "border-border",

    "bg-gradient-to-b",
    "from-primary/5",
    "to-background",

    "p-8",

    "shadow-md",

    "transition-all",
    "duration-300",

    "hover:-translate-y-2",
    "hover:shadow-xl",
    "hover:shadow-primary/10",
  ],
  {
    variants: {
      size: {
        sm: "max-w-xs",
        md: "max-w-sm",
        lg: "max-w-md",
      },
    },

    defaultVariants: {
      size: "md",
    },
  }
);

export interface TeacherPainCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof teacherPainCardVariants> {
  icon: React.ReactNode;

  title: string;

  description: string;

  iconClassName?: string;
}

export function TeacherPainCard({
  className,

  size,

  icon,

  title,

  description,

  iconClassName,

  ...props
}: TeacherPainCardProps) {
  return (
    <div
      className={cn(
        teacherPainCardVariants({
          size,
        }),
        "bg-light"
        ,
        className
      )}
      {...props}
    >
      {/* Ícone */}

      <div
        className={cn(
          "flex h-18 w-18 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110",
          iconClassName ?? "bg-primary/10 text-primary"
        )}
      >
        {icon}
      </div>

      {/* Título */}

      <h3 className="mt-6 text-center text-2xl text-secondary font-bold">
        {title}
      </h3>

      {/* Descrição */}

      <p className="mt-2 text-justify leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}