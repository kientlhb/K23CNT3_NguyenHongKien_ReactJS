import axios from 'axios';

const API_URL = 'https://67da6eb435c87309f52c7012.mockapi.io/k23cnt3_nguyenhongkien/Nhk_users';

export const getUsers = () => axios.get(API_URL);
export const getUser = (NhkId) => axios.get(`${API_URL}/${NhkId}`);
export const createUser = (user) => axios.post(API_URL, user);
export const updateUser = (NhkId, user) => axios.put(`${API_URL}/${NhkId}`, user);
export const deleteUser = (NhkId) => axios.delete(`${API_URL}/${NhkId}`);