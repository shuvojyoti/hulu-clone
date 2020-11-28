import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Result from "./Results";
import requests from "./requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      <Header />
      {/* Header */}
      <Nav setSelectedOption={setSelectedOption} />
      {/* Nav */}
      <Result selectedOption={selectedOption} />
      {/* Results */}
    </div>
  );
}

export default App;
