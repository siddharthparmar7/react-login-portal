import { userConstants } from "../constants";

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        registering: false,
      };
    default:
      return state;
  }
}
