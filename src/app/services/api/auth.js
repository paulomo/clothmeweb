import { userEndoint } from './endpoints';

export const createUser = async (user) => {
    const url = userEndoint.createUser;
    try {
        const user = await API.post(url, user);
        return user.data;
    }catch(error) {
        return error.data;
    }
}

export const updateUser = async (id) => {
    const url = userEndoint.updateUser;
    try {
        const user = await API.post(url, id);
        return user.data;
    }catch(error) {
        return error.data;
    }
}

export const disableUser = (id) => {
    const url = userEndoint.disableUser;
    try {
        const result = await API.post(url, id);
        return result.data;
    }catch(error) {
        return error.data;
    }
}

export const enableUser = (id) => {
    const url = userEndoint.enableUser;
    try {
        const result = await API.post(url, id);
        return result.data;
    }catch(error) {
        return error.data;
    }
}