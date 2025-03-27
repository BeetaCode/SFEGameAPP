import { useNavigate } from 'react-router-dom';
import BananaGameImage from '../assets/BananaGame.png';
import TomatoGameImage from '../assets/TomatoGame.png';
import SmileGameImage from '../assets/SmileGame.jpeg';

function Games() {
  const navigate = useNavigate();

  const games = [
    {
      name: 'Banana Game',
      path: '/bananagame',
      image: BananaGameImage,
      bgColor: 'bg-amber-400',
      hoverColor: 'hover:bg-amber-500',
      textColor: 'text-amber-800',
    },
    {
      name: 'Tomato Game',
      path: '/tomatogame',
      image: TomatoGameImage,
      bgColor: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      textColor: 'text-red-800',
    },
    {
      name: 'Smile Game',
      path: '/smilegame',
      image: SmileGameImage,
      bgColor: 'bg-blue-400',
      hoverColor: 'hover:bg-blue-500',
      textColor: 'text-blue-800',
    },
  ];

  return (
    <div className="bg-white shadow-xl rounded-3xl p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-8">Available Games</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {games.map((game, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-all duration-300 hover:scale-105"
          >
            <h3 className={`text-lg font-semibold mb-3 ${game.textColor}`}>
              {game.name}
            </h3>

            <button
              className={`
                ${game.bgColor} 
                ${game.hoverColor}
                h-40 w-full 
                rounded-2xl 
                shadow-lg 
                overflow-hidden 
                transition-all 
                duration-300 
                transform 
                hover:shadow-xl
                flex items-center justify-center
                border-2 border-white
              `}
              onClick={() => navigate(game.path)}
            >
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-110"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
