import { useEffect, useState } from 'react';
import { leaderboardService } from '../services/leaderboardService';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import {
  leaderboarddata,
  leaderboardEntry,
} from '../interfaces/leaderboarddata';
import { CircleUserRound } from 'lucide-react';

function Leaderboard() {
  const [selectedGame, setSelectedGame] = useState('banana');
  const [leaderboardData, setLeaderboardData] = useState<leaderboarddata>({
    result: [],
  });

  useEffect(() => {
    getLeaderboardData(selectedGame);
  }, []);

  const getLeaderboardData = async (game: string) => {
    try {
      const response = await leaderboardService(game);
      setLeaderboardData(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error('An unexpected error occurred.');
      }
    }
  };

  const handleGameChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const game = event.target.value;
    setSelectedGame(game);
    await getLeaderboardData(game); // Use the directly passed value
  };

  return (
    <div className="bg-white h-143 shadow-md flex flex-col fy-between items-start rounded-2xl p-5">
      <div>
        <h2 className="font-bold text-xl pl-1">Leaderboard</h2>
      </div>
      {/* Select styles Got from Deep Seek AI*/}
      <div className="relative w-48 ml-55">
        {' '}
        <select
          className="
      w-full 
      px-4 
      py-2 
      pr-10 
      text-right 
      bg-amber-500 
      hover:bg-amber-600 
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
      focus:ring-amber-700
      focus:ring-opacity-50
    "
          onChange={handleGameChange}
          value={selectedGame}
        >
          <option
            value="banana"
            className="bg-amber-600 hover:bg-amber-700"
          >
            Banana Game
          </option>
          <option
            value="tomato"
            className="bg-amber-600 hover:bg-amber-700"
          >
            Tomato Game
          </option>
          <option
            value="smile"
            className="bg-amber-600 hover:bg-amber-700"
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
      <br />
      <div className="w-full mb-16">
        {leaderboardData.result.length > 0 ? (
          <div className="overflow-hidden rounded-xl shadow-sm border border-amber-100">
            <table className="w-full divide-y divide-amber-100">
              <thead className="bg-amber-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">
                    Player
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-amber-100">
                {leaderboardData.result.map(
                  (entry: leaderboardEntry, index: number) => (
                    <tr
                      key={entry.applicationUserId}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-amber-50'}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                            <CircleUserRound className="w-5 h-5 text-amber-600" />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {entry.firstName} {entry.lastName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-700 font-semibold">
                          {entry.minTimeConsumed}{' '}
                          <span className="text-gray-500 text-xs">seconds</span>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto flex flex-col items-center justify-center">
              <CircleUserRound className="w-12 h-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">
                No records yet
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Be the first to set a record!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Leaderboard;
