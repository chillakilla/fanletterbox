import fakeData from "../../fakeData.json";
import { SET_LETTERS, ADD_LETTER } from "./letterAction";

const initialState = fakeData;

const letterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LETTERS:
      return action.paylord;
    case ADD_LETTER:
      return [...state, action.paylord];
    default:
      return state;
  }
};

export default letterReducer;
