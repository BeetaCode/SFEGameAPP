import axios from 'axios';
import { smileGameData } from '../interfaces/smilegamedata';

const SMILE_GAME_DATA_API_URL = 'https://localhost:5001/api/SmileGame';

export const getSmileGame = async () => {
  const response = await axios.get('https://marcconrad.com/uob/smile/api.php');
  return response.data;
};

export const sendSmileGameData = async (smileGameData: smileGameData) => {
  const token = localStorage.getItem('token'); // Retrieve the token from storage

  if (!token) {
    throw new Error('No token found. Please log in again.');
  }

  const response = await axios.post(
    `${SMILE_GAME_DATA_API_URL}/add-user-marks`,
    smileGameData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
};
