import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Brand from "./components/brand/Brand";
import Features from "./containers/features/Features";
import Advantages from "./containers/advantages/Advantages";
import Pricing from "./containers/pricing/Pricing";
import Reviews from "./containers/reviews/Reviews";
import Boilerplate from "./components/boilerplate/Boilerplate";
import CTA from "./components/cta/CTA";
import Footer from "./containers/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brand />
      <Features />
      <Advantages />
      <Pricing />
      <Reviews />
      <Boilerplate />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
