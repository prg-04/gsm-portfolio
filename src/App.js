import {
  Footer,
  Header,
  Blog,
  Features,
  Possibility,
  WhatGPT
} from "./container";
import { Brand, CTA, Navbar } from "./components";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
