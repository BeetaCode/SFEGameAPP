import axios from 'axios';
import { tomatoGameData } from '../interfaces/tomatogamedata';

const TOMATO_GAME_DATA_API_URL = 'https://localhost:5001/api/TomatoGame';

export const getTomatoGame = async () => {
  const response = await axios.get('https://marcconrad.com/uob/tomato/api.php');
  return response.data;
};

export const sendTomatoGameData = async (tomatoGameData: tomatoGameData) => {
  const token = localStorage.getItem('token'); // Retrieve the token from storage

  if (!token) {
    throw new Error('No token found. Please log in again.');
  }

  const response = await axios.post(
    `${TOMATO_GAME_DATA_API_URL}/add-user-marks`,
    tomatoGameData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
};
