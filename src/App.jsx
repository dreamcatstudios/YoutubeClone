import { useState } from "react";
import Navigation from "./components/Navigation";
import List from "./components/List";
import "./App.css";
import Card from "./components/Card";
import SideDiv from "./components/sidediv"
import { Wrapper } from "./Wrapper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation/>
      <Wrapper/>
    </>
  );
}

export default App;
