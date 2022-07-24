import React, { Dispatch } from "react";

export type variants = "primary" | "secondary";

export interface InputProps {
  value: string;
  onChange: Dispatch<React.SetStateAction<string>>;
  variant?: variants;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  validations?: validationFunction[];
  errorMessage?: string;
  successMessage?: string;
  styles?: React.CSSProperties;
}

export type validationFunction = (value: string) => boolean;
