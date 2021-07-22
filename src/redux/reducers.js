import { combineReducers } from "redux";
import blog from "./blogSlice";
import auth from "./authSlice";
import user from "./userSlice";

export default combineReducers({
    blog,
    auth,
    user,
});
