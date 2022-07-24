import React from "react";
import "../Tabs/index";
import { TabProps } from "./types";

const Tab = ({ label, id, active, setActiveTab, styles }: TabProps) => {
  return (
    <div
      className={`tabs__item ${active ? `tabs__item_active` : ``}`}
      style={{ ...styles }}
      onClick={() => setActiveTab(id)}
    >
      <div className="tabs__substrate"></div>
      <span className="tabs__label">{label}</span>
    </div>
  );
};

export default Tab;
