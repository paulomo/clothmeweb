import API from './api';
import { Endpoint } from './endpoints';

let endpoint = Endpoint();

export const createUser = async (data) => {
    const url = endpoint.createUser;
    try {
        const user = await API.post(url, data);
        return user.data;
    }catch(error) {
        return error.data;
    }
}

export const disableUser = (id) => {
    const url = endpoint.disableUser;
    try {
        const result = await API.post(url, id);
        return result.data;
    }catch(error) {
        return error.data;
    }
}

export const enableUser = (id) => {
    const url = endpoint.enableUser;
    try {
        const result = await API.post(url, id);
        return result.data;
    }catch(error) {
        return error.data;
    }
}