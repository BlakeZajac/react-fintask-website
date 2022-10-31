import "./App.scss";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Brand from "./components/brand/Brand";
import Features from "./containers/features/Features";
import Advantages from "./containers/advantages/Advantages";
import Pricing from "./containers/pricing/Pricing";
import Reviews from "./containers/reviews/Reviews";
import Boilerplate from "./components/boilerplate/Boilerplate";
import CTA from "./components/cta/CTA";

function App() {
  return (
    <div className="App">
      <Hero />
      <Brand />
      <Features />
      <Advantages />
      <Pricing />
      <Reviews />
      <Boilerplate />
      <CTA />
    </div>
  );
}

export default App;
