import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import GoHomeButton from "./GoHomeButton";
import User from "./User";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="navigation-buttons">
        <BackButton />
        <ForwardButton />
        <GoHomeButton />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId" element={<User />}>
          <Route path="posts" element={<p>Here are a list of the user’s posts</p>} />
          <Route path="posts/:postId" element={<p>Here is a single post</p>} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
