import { createStore } from "redux";
import combine from "../modules/combine";

const configStore = createStore(combine);

export default configStore;
