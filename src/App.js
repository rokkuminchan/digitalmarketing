import React from "react";
import "./App.css";
import TechnologyPage from "./pages/TechnologyPage";
import TechnologyData from "./data/TechnologyData";

function App() {
  return (
    <div className="App">
      <TechnologyPage data={TechnologyData} />
    </div>
  );
}

export default App;
