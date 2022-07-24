import { ReactNode } from "react";

export type variants =
  | "primary"
  | "secondary"
  | "round-primary"
  | "round-secondary"
  | "progress";

export interface ButtonProps {
  children: ReactNode;
  variant?: variants;
  subtitle?: string;
  progress?: boolean;
  filter?: boolean;
  throbber?: boolean;
  disabled?: boolean;
  value?: number;
  total?: number;
  filters?: number;
  clickHandler?: () => void;
  styles?: React.CSSProperties;
}
