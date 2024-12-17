import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL

export const addNewManager = async (data) => {
    try {
        const token = localStorage.getItem('token')
        const refreshToken = localStorage.getItem('refresh-token')
        const response = await axios.post(`${BASE_URL}/api/register`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                'x-refresh-token': `${refreshToken}`,
            }       
        })
        console.log(response.data)
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

export const loginUser = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/login`, data)
        console.log(response.data)
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

