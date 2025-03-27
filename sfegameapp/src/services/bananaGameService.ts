import axios from 'axios';
import { bananaGameData } from '../interfaces/bananagamedata';

const BANANA_GAME_DATA_API_URL = 'https://localhost:5001/api/BananaGame';

export const getBananaGame = async () => {
  const response = await axios.get('https://marcconrad.com/uob/banana/api.php');
  return response.data;
};

export const sendBananaGameData = async (bananaGameData: bananaGameData) => {
  const token = localStorage.getItem('token'); // Retrieve the token from storage

  if (!token) {
    throw new Error('No token found. Please log in again.');
  }

  const response = await axios.post(
    `${BANANA_GAME_DATA_API_URL}/add-user-marks`,
    bananaGameData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
};
