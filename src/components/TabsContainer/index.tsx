import React from "react";
import Tabs from "../ui/Tabs";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { setActiveTab } from "../../redux/componentsSlice";

const TabsContainer = () => {
  const { activeTab, components } = useSelector(
    (state: RootState) => state.components
  );
  const dispatch = useDispatch();

  return (
    <div className="App__tabs">
      <Tabs
        data={components}
        value={activeTab}
        onChange={(newId) => dispatch(setActiveTab(newId))}
      />
      <Tabs
        data={components}
        value={activeTab}
        onChange={(newId) => dispatch(setActiveTab(newId))}
        variant="secondary"
      />
    </div>
  );
};

export default TabsContainer;
