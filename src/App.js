import React, { Component } from "react";
import { HomePage } from "./pages";
import { Header } from "./components";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
