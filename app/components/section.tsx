/* eslint-disable react/prop-types */
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "~/lib/utils";

const sectionVariants = cva("p-4 rounded-md", {
  variants: {
    variant: {
      default: "",
      border: "border",
    },
    defaultVariants: {
      variant: "default",
    },
  },
});

interface SectionProps
  extends React.HtmlHTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  title?: string;
  children?: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, title, variant, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(sectionVariants({ variant, className }))}
      {...props}
    >
      {title && <h3 className="font-bold text-2xl pb-4">{title}</h3>}
      {children}
    </section>
  )
);

Section.displayName = "Section";

export { Section };
