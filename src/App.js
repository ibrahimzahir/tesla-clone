import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import "./App.css";

import HeaderSwitch from "./HeaderSwitch";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<HeaderSwitch />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
