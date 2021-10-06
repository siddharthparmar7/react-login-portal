import { userConstants } from "../constants";
import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers";

export const userActions = {
  login,
  logout,
  register,
};

function login(user) {
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

  return (dispatch) => {
    userService
      .login(user)
      .then(() => dispatch(request(user)))
      .then(() => {
        dispatch(success(user));
        history.push("/home");
      })
      .catch((e) => dispatch(failure(e)));
  };
}

function logout() {
  // complete this function

  return (dispatch) => {
    try {
      userService.logout();
      dispatch({ type: userConstants.LOGOUT });
      history.push("/login");
    } catch (e) {
      console.log("error logout", e);
    }
  };
}

function register(user) {
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

  return (dispatch) => {
    userService
      .register(user)
      .then(() => dispatch(request(user)))
      .then(() => {
        dispatch(success(user));
        history.push("/home");
      })
      .catch((e) => dispatch(failure(e)));
  };
}
