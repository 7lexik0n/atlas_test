import React from "react";
import Tab from "../Tab";
import "./index.sass";
import { TabsProps } from "./types";

const Tabs = ({
  data,
  value,
  onChange,
  variant = "primary",
  styles,
}: TabsProps) => {
  const setActiveTab = (id: string) => {
    onChange(id);
  };

  return (
    <div className={`tabs tabs_${variant}`} style={{ ...styles }}>
      {data.map((tabItem) => (
        <Tab
          key={tabItem.id}
          {...tabItem}
          active={tabItem.id === value}
          setActiveTab={setActiveTab}
        />
      ))}
    </div>
  );
};

export default Tabs;
