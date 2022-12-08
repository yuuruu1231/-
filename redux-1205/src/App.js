import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Post from './Post';

function App() {
  return (
    <div className="App">
      <h1>Redux Learn</h1>
      <Post />
    </div>
  );
}

export default App;