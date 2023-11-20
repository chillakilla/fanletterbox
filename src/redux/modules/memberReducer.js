import { SET_MEMBER } from "./memberAction";

const memberReducer = (state = "카리나", action) => {
  switch (action.type) {
    case SET_MEMBER:
      return action.paylord;
    default:
      return state;
  }
};

export default memberReducer;
