import { userConstants } from "../constants";
import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers";

export const userActions = {
  login,
  logout,
  register,
};

function login(user, dispatch) {
  // return the promise using fetch which adds to localstorage on resolve

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }

  return userService
    .login(user)
    .then((res) => dispatch(request(user)))
    .then((res) => dispatch(success(user)))
    .then(() => {
      history.push("/home");
    })
    .catch((e) => dispatch(failure(e)));
}

function logout() {
  // complete this function
}

function register(user, dispatch) {
  // return the promise using fetch which dispatches appropriately

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }

  return userService
    .register(user)
    .then((res) => dispatch(request(user)))
    .then((res) => dispatch(success(user)))
    .then(() => {
      history.push("/home");
    })
    .catch((e) => dispatch(failure(e)));
}
