import { brandEndpoint } from '../api/endpoints';
import API from '../api/api';

export const readAllBrandUser = async () => {
    const url = brandEndpoint.readAllBrandUsers;
    try {
        const response = await API.post(url);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const readOneBrandUser = async (id) => {
    const url = brandEndpoint.readOneBrandUser;
    try {
        const response = await API.post(url, id);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const updateBrandUser = async (id) => {
    const url = brandEndpoint.updateBrandUser;
    try {
        const response = await API.post(url, id);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const disableBrandUser = async (id) => {
    const url = brandEndpoint.disableBrandUser;
    try {
        const response = await API.post(url, id);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const enableBrandUser = async (id) => {
    const url = brandEndpoint.enableBrandUser;
    try {
        const response = await API.post(url, id);
        return response.data;
    }catch(error) {
        return error.data;
    }
}