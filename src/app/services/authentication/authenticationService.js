import { Auth } from "aws-amplify";
import * as auth from "../api/index";

export const signupUserService = async user => {
  const { email, password, firstname, lastname, companyName, plan } = user;
  try {
    const response = await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email: email,
        given_name: firstname,
        family_name: lastname,
        company_name: companyName,
        role: "headOfficeAdmin",
        location: "headOffice",
        plan: plan
      }
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const signupUserServiceAxios = async user => {
  const { email, password, firstname, lastname, companyName, plan } = user;
  try {
    const userResponse = await auth.createUser({
      username: email,
      password: password,
      attributes: {
        email: email,
        given_name: firstname,
        family_name: lastname,
        company_name: companyName,
        role: "headOfficeAdmin",
        location: "headOffice",
        plan: plan
      }
    });
    const response = await JSON.stringify(userResponse);
    return response;
  } catch (error) {
    return error;
  }
};

export const confirmSignupService = async user => {
  const { username, code } = user;
  try {
    const response = Auth.confirmSignUp(username, code);
    return response;
  } catch (error) {
    return error;
  }
};

export const signinUserService = async user => {
  const { email, password } = user;
  try {
    const user = await Auth.signIn(email, password);
    return user;
  } catch (error) {
    return error;
  }
};

export const signoutUserService = async () => {
  const signOut = await Auth.signOut();
  return signOut;
};

export const signoutGloballyUserService = async () => {
  // By doing this, you are revoking all the auth tokens(id token, access token and refresh token)
  // which means the user is signed out from all the devices
  // Note: although the tokens are revoked, the AWS credentials will remain valid until they expire (which by default is 1 hour)
  const signOut = await Auth.signOut({ global: true });
  return signOut;
};

export const resetPassword = async user => {
  const { oldPassword, newPassword } = user;
  try {
    const user = await Auth.currentAuthenticatedUser();
    const password = await Auth.changePassword(user, oldPassword, newPassword);
    return password;
  }catch(error){
    return error;
  }
};

export const forgotPassword = async user => {
  const { email } = user;
  try {
    const email = await Auth.forgotPassword(email);
  }catch(error){

  }
  // Collect confirmation code and new password, then
  const user = await Auth.forgotPasswordSubmit(email, code, new_password)
    .then(data => console.log(data))
    .catch(err => console.log(err));
};
