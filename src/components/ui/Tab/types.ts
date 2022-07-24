import React from "react";

export interface TabProps {
  label: string;
  id: string;
  active: boolean;
  setActiveTab: (id: string) => void;
  styles?: React.CSSProperties;
}
