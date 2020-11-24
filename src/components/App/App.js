import "./App.css";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import MainPage from "../../routes/MainPage/MainPage";

export default class App extends Component {
  render() {
    return (
      <div className="App__route">
        <Route exact path="/" component={MainPage} />
      </div>
    )
  }
}