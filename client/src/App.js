import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/HeroSection/Herosection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
    </div>
  );
};

export default App;
