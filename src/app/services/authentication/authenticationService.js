import { Auth } from "aws-amplify";
import * as auth from "../api/index";

export const signupUserService = async user => {
  const {
    email,
    password,
    firstname,
    lastname,
    gender,
    birthdate,
    phoneNUmber,
    companyName,
    companyPlan
  } = user;
  try {
    const user = await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email: email,
        phone_number: phoneNUmber, // E.164 number convention
        given_name: firstname,
        family_name: lastname,
        gender: gender,
        birthdate: birthdate,
        company_name: companyName,
        role: "headOfficeAdmin",
        location: "headOffice",
        plan: companyPlan
      }
    });
    return user;
  } catch (error) {
    return error;
  }
};

export const signupUserServiceAxios = async user => {
  const {
    email,
    password,
    firstname,
    lastname,
    gender,
    birthdate,
    phoneNUmber,
    companyName,
    companyPlan
  } = user;
  try {
    const user = await auth.createUser({
      username: email,
      password: password,
      attributes: {
        email: email,
        phone_number: phoneNUmber, // E.164 number convention
        given_name: firstname,
        family_name: lastname,
        gender: gender,
        birthdate: birthdate,
        company_name: companyName,
        role: "headOfficeAdmin",
        location: "headOffice",
        plan: companyPlan
      }
    })
    const jsonObject = await JSON.stringify(user);
    return jsonObject;
  } catch (error) {
    return error;
  }
};

export const confirmSignupService = async user => {
  const { email, code } = user;
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
  const user = await Auth.currentAuthenticatedUser();
  const newPassword = await Auth.changePassword(user, oldPassword, newPassword);
  return newPassword;
};

export const forgotPassword = async user => {
  const { email } = user;
  const email = await Auth.forgotPassword(email);

  // Collect confirmation code and new password, then
  const user = await Auth.forgotPasswordSubmit(email, code, new_password)
    .then(data => console.log(data))
    .catch(err => console.log(err));
};
