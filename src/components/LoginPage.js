import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../actions";

class Login extends Component {
  constructor(props) {
    super(props);

    // reset login status

    this.state = {
      username: "",
      password: "",
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const key = e.target.name;
    const val = e.target.value;
    if (key && val) {
      this.setState((state) => {
        state[key] = val;
        return state;
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({submitted:true});

    this.props.login({
      username: this.state.username,
      password: this.state.password,
    });
  }

  render() {
    const { username, password, submitted } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div
            className={
              "form-group" + (submitted && !username ? " has-error" : "")
            }
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control username"
              name="username"
              onChange={this.handleChange}
            />
            {submitted && !username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <div
            className={
              "form-group" + (submitted && !password ? " has-error" : "")
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={this.handleChange}
              className="form-control"
              name="password"
            />
            {submitted && !password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            <Link to="/register" className="btn btn-link">
              Register
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    login: (user) => userActions.login(user, dispatch),
  };
}

export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);

export { LoginPage as TestLoginPage };
