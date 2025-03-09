import { Calculator, Trophy, Medal } from 'lucide-react';
import '../styles/home.css';
import BananaImage from '../assets/BananaAdventure.png';

function HomeItems() {
  return (
    <div className="flex flex-col items-center pt-5">
      <div className="flex space-x-4">
        <div className="whitebox">
          <Calculator className="icon" />
          <p className="font-bold pb-2 pt-1">Solve Equations</p>
          <p className="font-normal text-xs">
            Challenge yourself with various mathematical equations
          </p>
        </div>
        <div className="whitebox">
          <Trophy className="icon" />
          <p className="font-bold pb-2 pt-1">Win Rewards</p>
          <p className="font-normal text-xs">
            Earn points and unlock special achievements
          </p>
        </div>
        <div className="whitebox">
          <Medal className="icon" />
          <p className="font-bold pb-2 pt-1">Compete</p>
          <p className="font-normal text-xs">
            Challenge friends and climb the leaderboard
          </p>
        </div>
      </div>
      <img
        src={BananaImage}
        alt="Descriptive Alt Text"
        className="mt-6 w-150 h-auto shadow-xl rounded-2xl"
      />
    </div>
  );
}

export default HomeItems;
