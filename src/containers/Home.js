import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
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
      <div className="Home">
      <p className="App-intro">
        A Sync Demo Page <br />
        <Link to="/sub-page">Sub Page</Link>
      </p>
      </div>
    );
  }
}
