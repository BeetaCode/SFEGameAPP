import { useNavigate } from 'react-router-dom';
import BananaGameImage from '../assets/BananaGame.png';

function Games() {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-50 shadow-md flex flex-col justify-between items-start mt-5 ml-20 mr-150 rounded-2xl p-5">
      <div>
        <h2 className="font-bold text-xl pl-1">Available Games</h2>
      </div>
      <h4 className="pl-1 text-gray-600">Banana Game</h4>
      <button
        className="bg-blue-600 h-22 shadow-md rounded-lg w-50 mb-2 flex items-center justify-center"
        onClick={() => navigate('/bananagame')}
      >
        <img
          src={BananaGameImage}
          alt="Button Icon"
          className="w-48 h-20 rounded-lg"
        />
      </button>
    </div>
  );
}

export default Games;
