import "./style/Home.scss";
import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Porto from "./components/Porto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Porto />} />
      </Routes>
    </Router>
  );
}

export default App;
