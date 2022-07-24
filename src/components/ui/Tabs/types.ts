import React from "react";

export interface TabItem {
  label: string;
  id: string;
}

export interface TabsProps {
  data: TabItem[];
  value: string;
  onChange: (newId: string) => void;
  variant?: "primary" | "secondary";
  styles?: React.CSSProperties;
}
