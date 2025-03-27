import axios from 'axios';

const BANANA_REWARD_API_URL = 'https://localhost:5001/api/BananaGame';
const TOMATO_REWARD_API_URL = 'https://localhost:5001/api/TomatoGame';
const SMILE_REWARD_API_URL = 'https://localhost:5001/api/SmileGame';

export const rewardService = async (selectedGame: string) => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('No token found. Please log in again.');
  }
  if (selectedGame === 'banana') {
    const response = await axios.get(`${BANANA_REWARD_API_URL}/get-rewards`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response;
  } else if (selectedGame === 'tomato') {
    const response = await axios.get(`${TOMATO_REWARD_API_URL}/get-rewards`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response;
  } else {
    const response = await axios.get(`${SMILE_REWARD_API_URL}/get-rewards`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response;
  }
};
