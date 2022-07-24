import React from "react";

export interface CounterProps {
  label?: string;
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
  styles?: React.CSSProperties;
}
