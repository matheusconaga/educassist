import * as React from "react";
import { cn } from "@/lib/utils";

interface StepProps
  extends React.HTMLAttributes<HTMLDivElement> {
  number: number;
  title: string;
  description: string;
}

export function Step({
  className,
  number,
  title,
  description,
  ...props
}: StepProps) {
  return (
    <div
      className={cn(
        "group flex items-start gap-3",
        className
      )}
      {...props}
    >
      <div
        className="
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-primary
            text-xl
            font-bold
            text-primary-foreground

            transition-all
            duration-300

            group-hover:scale-110
            group-hover:shadow-lg
            group-hover:shadow-primary/20
        "
      >
        {number}
      </div>

      <div>
        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <p className="max-w-sm leading-8 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}