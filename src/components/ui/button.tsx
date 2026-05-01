import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/utils";
import "./button.css";

export type ButtonVariant = "primary" | "holo" | "lime" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Render a trailing → that animates on hover. */
  trailingArrow?: boolean;
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    trailingArrow = false,
    className,
    children,
    type = "button",
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn("btn", `btn--${variant}`, `btn--${size}`, className)}
      {...rest}
    >
      {children}
      {trailingArrow && <span className="btn__arrow" aria-hidden="true">→</span>}
    </button>
  );
});

Button.displayName = "Button";
