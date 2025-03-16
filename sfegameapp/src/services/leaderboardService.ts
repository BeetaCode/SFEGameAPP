import axios from 'axios';

const LEADERBOARD_API_URL = 'https://localhost:5001/api/BananaGame';

export const leaderboardService = async () => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('No token found. Please log in again.');
  }

  const response = await axios.get(`${LEADERBOARD_API_URL}/get-leaderboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response;
};
