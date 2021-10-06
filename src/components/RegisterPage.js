import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../actions";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: "",
      },
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // handle input change and dispatch register
    const key = e.target.name;
    const val = e.target.value;
    if (key && val) {
      this.setState((state) => {
        state.user[key] = val;
        return state;
      });
    }
  }

  handleSubmit(e) {
    // handle button click and dispatch register
    e.preventDefault();
    this.setState({submitted: true})
    this.props.register(this.state.user);

  }

  render() {
    const { user, submitted } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Register</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div
            className={
              "form-group" + (submitted && !user.username ? " has-error" : "")
            }
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control username"
              name="username"
              onChange={this.handleChange}
            />
            {submitted && !user.username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <div
            className={
              "form-group" + (submitted && !user.password ? " has-error" : "")
            }
          >
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              className="form-control"
              name="password"
            />
            {submitted && !user.password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>
            <Link to="/login" className="btn btn-link">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

// complete the below function
function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch){
    return {
        register: (user) => userActions.register(user, dispatch)
    }
}

export const RegisterPage = connect(mapStateToProps, mapDispatchToProps)(Register)

export { RegisterPage as TestRegisterPage };
