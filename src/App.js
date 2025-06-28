import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import JobFinderApp from "./components/JobFinderApp";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobFinderApp />} />
        <Route path="/header" element={<Header />} />
      </Routes>
     
    </Router>
    
  );
}

export default App;
