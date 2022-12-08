import React from "react";
import "./App.css";
import store from './store/index';
import { connect } from "react-redux";
import Count from "./Count";
import { useSelector } from 'react-redux';
import Post from "./Post";

function App({ count, a }) {
  return (
    <div className="App">
      <h1>Redux Learn</h1>
      <p>Count: {count}</p>
      <p>count: {a}</p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { count: state.count, a: state.count2 };
};
export default connect(mapStateToProps)(App);