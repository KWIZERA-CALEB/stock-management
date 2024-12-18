import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL


export const addNewProduct = async (data) => {
    try {
        const response = axios.post(`${BASE_URL}/api/products/add`, data)
        return response.data
    } catch(error) {
        if (error.response) {
            return { error: error.response.data.error || 'An unexpected error occurred' };
        } else if (error.request) {
            return { error: 'Network error. Please check your connection.' };
        } else {
            return { error: 'An unexpected error occurred' };
        }
    }
}

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/products/all`)
        return response.data
    } catch(error) {
        if (error.response) {
            return { error: error.response.data.error || 'An unexpected error occurred' };
        } else if (error.request) {
            return { error: 'Network error. Please check your connection.' };
        } else {
            return { error: 'An unexpected error occurred' };
        }
    }
}


export const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/api/products/delete/${productId}`)
        return response.data
    } catch(error) {
        if (error.response) {
            return { error: error.response.data.error || 'An unexpected error occurred' };
        } else if (error.request) {
            return { error: 'Network error. Please check your connection.' };
        } else {
            return { error: 'An unexpected error occurred' };
        }
    }
}