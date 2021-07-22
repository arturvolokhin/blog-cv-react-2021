import { combineReducers } from "redux";
import blog from "./blogSlice";
import auth from "./authSlice";

export default combineReducers({
    blog,
    auth,
});
