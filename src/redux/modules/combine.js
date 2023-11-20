import { combineReducers } from "redux";
import letterReducer from "./lettersReducer";
import memberReducer from "./memberReducer";

const rootReducer = combineReducers({
  letters: letterReducer,
  member: memberReducer,
});

export default rootReducer;
