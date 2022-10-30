import "./App.scss";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Brand from "./components/brand/Brand";
import Features from "./containers/features/Features";
import Advantages from "./containers/advantages/Advantages";
import Pricing from "./containers/pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Hero />
      <Brand />
      <Features />
      <Advantages />
      <Pricing />
    </div>
  );
}

export default App;
