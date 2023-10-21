import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Homepage";
import Recipe from "./components/Recipe/Recipe";
import './App.css'
import NewPage from "./components/NewPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewPage/>} />
        <Route path="/dashboard" element={<Recipe/>} />
      </Routes>
    </Router>
  );
}

export default App;
