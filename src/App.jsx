import { useState } from "react";
import Navigation from "./components/Navigation";
import List from "./components/List";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <List></List>
    </>
  );
}

export default App;
