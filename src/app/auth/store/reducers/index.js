import { combineReducers } from "redux";
import user from "./user.reducer";
import signin from "./signin.reducer";
import signup from "./signup.reducer";
import backgroundcheck from "./background.reducer";
import forgotpassword from "./forgotpassword.reducer";
import resetpassword from "./resetpassword.reducer";

const authReducers = combineReducers({
  user,
  signin,
  signup,
  backgroundcheck,
  forgotpassword,
  resetpassword
});

export default authReducers;
