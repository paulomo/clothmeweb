import { authEndpoint } from '../api/endpoints';
import axios from 'axios';


/**
 * SIGNUP
 * @param {*} user  is an object
 * @returns a JSON DATA or ERROR
 */
export const signUp = async (user) => {
    const url = authEndpoint.signUpUser;
    try {
        const userResponse = await axios.post(url, user);
        const response = await JSON.stringify(userResponse);
        console.log(`response: ${response}`);
        return response.data;
    }catch(error) {
        const errorResponse = await JSON.stringify(error);
        console.log(`errorResponse: ${errorResponse}`);
        return errorResponse;
    }
}

export const signIn = async (user) => {
    const url = authEndpoint.signInUser;
    try {
        const response = await axios.post(url, user);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const changePassword = async (data) => {
    const url = authEndpoint.changePassword;
    try {
        const response = await axios.post(url, data);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const resetPassword = async (data) => {
    const url = authEndpoint.resetPassword;
    try {
        const response = await axios.post(url, data);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const forgotPassword = async (data) => {
    const url = authEndpoint.forgotPassword;
    try {
        const response = await axios.post(url, data);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const signOut = async () => {
  const url = authEndpoint.signOut;
  try {
      const response = await axios.post(url);
      return response.data;
  }catch(error) {
      return error.data;
  }
}