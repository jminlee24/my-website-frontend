import * as React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeaderBar from './components/HeaderBar.jsx'
import Home from "./routes/Home.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <HeaderBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={ErrorPage} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
