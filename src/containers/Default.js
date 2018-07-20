import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Default extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: false });
  }


  render() {
    return (
      <div className="Default">
      <p className="App-intro">
        Default / 404 page <br />
        <Link to="/">Home Page</Link>
      </p>
      </div>
    );
  }
}
