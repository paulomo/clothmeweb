import { productEndpoint } from '../api/endpoints';
import API from '../api/api';

export const createOrder = async (product) => {
    const url = productEndpoint.createOrder;
    try {
        const response = await API.post(url, product);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const readAllOrders = async () => {
    const url = productEndpoint.readAllOrders;
    try {
        const response = await API.post(url);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const readOneOrder = async (id) => {
    const url = productEndpoint.readOneOrder;
    try {
        const response = await API.post(url, id);
        if(response.data.status === 200) return response.data;
    }catch(error) {
        return error.data;
    }
}

export const updateOrder = async (product) => {
    const url = productEndpoint.updateOrder;
    try {
        const response = await API.post(url, product);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const deleteOrder = async (product) => {
    const url = productEndpoint.deleteOrder;
    try {
        const response = await API.post(url, product);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

