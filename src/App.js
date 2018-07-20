import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Routes from "./Routes";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      someState: false,
    };
  }
  changeState(state) {
    this.setState({
      someState: state,
    });
  }
  render() {
    const childProps = {
      someState: this.state.someState,
      changeState: this.changeState
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

      <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);;
