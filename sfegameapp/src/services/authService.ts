import axios from 'axios';
import { userData } from '../interfaces/userdata';
import { userlogindata } from '../interfaces/userlogindata';

const API_AUTH_URL = 'https://localhost:5001/api/auth';

export const signupUser = async (userData: userData) => {
  const response = await axios.post(`${API_AUTH_URL}/signup`, userData);
  return response.data;
};

export const loginUser = async (userlogindata: userlogindata) => {
  const response = await axios.post(`${API_AUTH_URL}/login`, userlogindata);
  return response.data;
};
