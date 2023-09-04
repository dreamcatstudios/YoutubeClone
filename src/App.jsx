import Navigation from "./components/Navigation";
<<<<<<< HEAD
import List from "./components/List";
import "./App.css";
import Card from "./components/Card";
=======
>>>>>>> a312e6278681f72f0f098577f5e15f124cd9843a
import { Wrapper } from "./components/Wrapper";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
