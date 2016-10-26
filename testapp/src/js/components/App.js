import React from "react";
import { Router, Route, hashHistory } from 'react-router';
import Layout from "./Layout";

export default class App extends React.Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}></Route>
      </Router>
    );
  }
}
