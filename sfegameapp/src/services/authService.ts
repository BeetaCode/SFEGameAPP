import axios from 'axios';
import { userData } from '../interfaces/userdata';

const API_AUTH_URL = 'https://localhost:5001/api/auth';

export const signupUser = async (userData: userData) => {
  const response = await axios.post(`${API_AUTH_URL}/signup`, userData);
  return response.data;
};
