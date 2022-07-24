import React from "react";
import { useSelector } from "react-redux";
import Buttons from "./components/Buttons";
import Inputs from "./components/Inputs";
import TabsContainer from "./components/TabsContainer";
import { RootState } from "./redux/store";

function App() {
  const { activeTab } = useSelector((state: RootState) => state.components);

  return (
    <div className="App">
      <TabsContainer />
      {(activeTab === "0" || activeTab === "1") && <Buttons />}
      {(activeTab === "2" || activeTab === "3") && <Inputs />}
    </div>
  );
}

export default App;
