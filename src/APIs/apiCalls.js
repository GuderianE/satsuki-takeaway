import axios from 'axios';

export const getMenuItems = async () => {
    const response = await axios.get('/takeaway')
    console.log(response.data);
    return response.data
}

export const addMenuItem = async (data) => {
    const response = await axios.post('/takeaway', data)
    console.log(response.data);
    return response.data
}

export const getMenuItem = async () => {
    const response = await axios.get('/takeaway')
    console.log(response.data);
    return response.data
}

export const deleteMenuItem = async ({_id}) => {
    const response = await axios.delete(`/takeaway/${_id}`)
    console.log(response.data);
    return response.data
}

export const updateMenuItem = async (data) => {
    const response = await axios.put(`/takeaway/${data._id}`, data)
    console.log(response.data);
    return response.data
}