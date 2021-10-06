import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../actions";

class Home extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    console.log("HOME COMPONENT");
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2 align="center">Welcome! You have successfully logged in.</h2>
        <p align="center">// Add a redirection for logout</p>
        <Link to="/login" onClick={this.handleLogout}>
          Logout
        </Link>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => userActions.logout()(dispatch),
  };
}

export const HomePage = connect(undefined, mapDispatchToProps)(Home);
