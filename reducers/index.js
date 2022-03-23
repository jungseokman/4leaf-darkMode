import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import test from "./test";
import mode from "./mode";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        test,
        mode,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
