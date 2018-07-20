import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Page extends Component {
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
      <div className="Page">
      <p className="App-intro">
        A Sub Page <br />
        <Link to="/notfound">404 Page</Link>
      </p>
      </div>
    );
  }
}
