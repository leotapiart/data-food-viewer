//import DataList from "./components/DataList"

import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent/MainContent";

function App() {
  const [view, setView] = useState("table");

  return (
    <div className="min-h-screen bg-gray-100">
      <Header view={view} setView={setView} />
      <MainContent view={view} />
    </div>
  );
}

export default App;
