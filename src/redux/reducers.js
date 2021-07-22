import { combineReducers } from "redux";
import blog from "./blogSlice";
import auth from "./authSlice";
import user from "./userSlice";
import header from "./headerSlice";

export default combineReducers({
    blog,
    auth,
    user,
    header
});
