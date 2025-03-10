import axios from 'axios';

export const getBananaGame = async () => {
  const response = await axios.get('https://marcconrad.com/uob/banana/api.php');
  return response.data;
};
