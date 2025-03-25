import { useNavigate } from 'react-router-dom';
import BananaGameImage from '../assets/BananaGame.png';
import TomatoGameImage from '../assets/TomatoGame.png';
import SmileGameImage from '../assets/SmileGame.jpeg';

function Games() {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-60 shadow-md rounded-2xl p-5 grid grid-rows-4">
      <div className="row-start-1">
        <h2 className="font-bold text-xl pl-1">Available Games</h2>
      </div>
      <div className="row-start-2 col-start-1 flex items-center justify-center">
        <h4 className="pl-1 text-gray-600">Banana Game</h4>
      </div>
      <div className="row-start-3 col-start-1 flex justify-center">
        <button
          className="bg-yellow-300 h-22 shadow-md rounded-lg w-50 mb-2 flex items-center justify-center cursor-pointer"
          onClick={() => navigate('/bananagame')}
        >
          <img
            src={BananaGameImage}
            alt="Button Icon"
            className="w-48 h-20 rounded-lg cursor-pointer"
          />
        </button>
      </div>
      <div className="row-start-2 col-start-2 flex items-center justify-center">
        <h4 className="pl-1 text-gray-600">Tomato Game</h4>
      </div>
      <div className="row-start-3 col-start-2 flex justify-center">
        <button
          className="bg-red-800 h-22 shadow-md rounded-lg w-50 mb-2 flex items-center justify-center cursor-pointer"
          onClick={() => navigate('/tomatogame')}
        >
          <img
            src={TomatoGameImage}
            alt="Button Icon"
            className="w-48 h-20 rounded-lg cursor-pointer"
          />
        </button>
      </div>
      <div className="row-start-2 col-start-3 flex items-center justify-center">
        <h4 className="pl-1 text-gray-600">Smile Game</h4>
      </div>
      <div className="row-start-3 col-start-3 flex justify-center">
        <button
          className="bg-blue-500 h-22 shadow-md rounded-lg w-50 mb-2 flex items-center justify-center cursor-pointer"
          onClick={() => navigate('/smilegame')}
        >
          <img
            src={SmileGameImage}
            alt="Button Icon"
            className="w-48 h-20 rounded-lg cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}

export default Games;
