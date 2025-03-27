import { useEffect, useState } from 'react';
import { rewardService } from '../services/rewardService';
import { rewardsdata, rewardsEntry } from '../interfaces/rewardsdata';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import firststReward from '../assets/1stReward.png';
import secondReward from '../assets/2ndReward.png';
import thirdReward from '../assets/3rdReward.png';
import fourthReward from '../assets/4thReward.png';
import fifthReward from '../assets/5thReward.png';

function Rewards() {
  const [selectedGame, setSelectedGame] = useState('banana');
  const [rewardsData, setRewardsData] = useState<rewardsdata>({
    result: [],
  });

  useEffect(() => {
    getRewardsdData(selectedGame);
  }, []);

  const handleGameChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const game = event.target.value;
    setSelectedGame(game);
    await getRewardsdData(game); // Use the directly passed value
  };

  const getRewardsdData = async (game: string) => {
    try {
      const response = await rewardService(game);
      console.log(response);
      setRewardsData(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="bg-white h-60 shadow-md flex flex-col justify-between items-start rounded-2xl p-5 mt-5">
      <div>
        <h2 className="font-bold text-xl pl-1">Your Rewards</h2>
      </div>
      {/* Select styles Got from Deep Seek AI*/}
      <div className="relative w-48 ml-150">
        {' '}
        <select
          className="
      w-full 
      px-4 
      py-2 
      pr-18 
      text-right 
      bg-amber-300 
      hover:bg-amber-400 
      text-white 
      font-medium 
      rounded-lg 
      shadow-md 
      cursor-pointer 
      transition-all 
      duration-200 
      appearance-none 
      focus:outline-none 
      focus:ring-2 
      focus:ring-amber-600
      focus:ring-opacity-50
    "
          onChange={handleGameChange}
          value={selectedGame}
        >
          <option
            value="banana"
            className="bg-amber-300 hover:bg-amber-400 "
          >
            Banana Game
          </option>
          <option
            value="tomato"
            className="bg-amber-300 hover:bg-amber-400 "
          >
            Tomato Game
          </option>
          <option
            value="smile"
            className="bg-amber-300 hover:bg-amber-400 "
          >
            Smile Game
          </option>
        </select>
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div className="w-full mb-16">
        {rewardsData.result.length > 0 ? (
          <div className="flex flex-row gap-4">
            {rewardsData.result.map((entry: rewardsEntry, index: number) => (
              <div key={index}>
                {(() => {
                  if (entry.rewardName === '1st') {
                    return (
                      <div className="">
                        <img
                          src={firststReward}
                          className="w-20 h-25 transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    );
                  } else if (entry.rewardName === '2nd') {
                    return (
                      <div>
                        <img
                          src={secondReward}
                          className="w-20 h-25 transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    );
                  } else if (entry.rewardName === '3rd') {
                    return (
                      <div>
                        <img
                          src={thirdReward}
                          className="w-20 h-25 transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    );
                  } else if (entry.rewardName === '4th') {
                    return (
                      <div>
                        <img
                          src={fourthReward}
                          className="w-20 h-25 transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    );
                  } else if (entry.rewardName === '5th') {
                    return (
                      <div>
                        <img
                          src={fifthReward}
                          className="w-20 h-25 transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    );
                  }
                })()}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto flex flex-col items-center justify-center">
              <h3 className="text-lg font-medium text-gray-900">
                No rewards yet
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Play games to earn rewards!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Rewards;
