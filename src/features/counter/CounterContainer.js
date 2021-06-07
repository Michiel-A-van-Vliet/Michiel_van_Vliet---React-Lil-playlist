import React from "react";
import logo from "./logo.svg";
import { Counter } from "./Counter";
import "./CounterContainer.css";

function CounterContainer() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About</h1>
        <p>
          This page uses React and Redux <br />
          (and HTML and CSS and JS).
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This page has been based on the counter template and a video on how to
          make a todo list.
        </p>
        <Counter />
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default CounterContainer;
