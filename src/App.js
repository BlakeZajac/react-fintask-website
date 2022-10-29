import "./App.scss";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="App">
      <Hero />
    </div>
  );
}

export default App;
