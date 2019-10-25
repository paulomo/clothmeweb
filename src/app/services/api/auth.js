import { userEndoint } from './endpoints';
import API from './api';


export const createUser = async (user) => {
    const url = userEndoint.createUser;
    try {
        const response = await API.post(url, user);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const updateUser = async (id) => {
    const url = userEndoint.updateUser;
    try {
        const response = await API.post(url, id);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const disableUser = async (id) => {
    const url = userEndoint.disableUser;
    try {
        const response = await API.post(url, id);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const enableUser = async (id) => {
    const url = userEndoint.enableUser;
    try {
        const response = await API.post(url, id);
        return response.data;
    }catch(error) {
        return error.data;
    }
}