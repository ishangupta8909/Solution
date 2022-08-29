import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import Fibonacci from "./pages/Fibonacci";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/fibonacciNum">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<LoginRegister />} />
          <Route path="/fibonacciNum" element={<Fibonacci />} />
        </Routes>
      </div>
    </Router>
  );
}
