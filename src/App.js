import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import GoHomeButton from "./GoHomeButton";
import "./App.css";
import RootRoutes from "./RootRoutes";

function App() {
  return (
    <Router>
      <div className="navigation-buttons">
        <BackButton />
        <ForwardButton />
        <GoHomeButton />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users/1">User 1</Link>
      </div>
      <RootRoutes />
    </Router>

  );
}

export default App;
