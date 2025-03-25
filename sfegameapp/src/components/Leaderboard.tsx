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
    <div className="bg-white h-125 shadow-md flex flex-col fy-between items-start rounded-2xl p-5">
      <div>
        <h2 className="font-bold text-xl pl-1">Leaderboard</h2>
      </div>
      <div className=" ml-70 bg-amber-500 rounded shadow-md w-30">
        <select
          className="text-right w-30"
          onChange={handleGameChange}
          // value={selectedGame}
        >
          <option
            className="bg-amber-600 hover:bg-amber-700"
            value="banana"
          >
            Banana Game
          </option>
          <option
            className="bg-amber-600 hover:bg-amber-700"
            value="tomato"
          >
            Tomato Game
          </option>
          <option
            className="bg-amber-600 hover:bg-amber-700"
            value="smile"
          >
            Smile Game
          </option>
        </select>
      </div>

      <div className="w-full mb-70">
        {leaderboardData.result.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr>
                {/* <th className="text-left">Rank</th>
                <th className="text-left">Name</th>
                <th className="text-left">Time Consumed</th> */}
              </tr>
            </thead>
            <tbody>
              {leaderboardData.result.map((entry: leaderboardEntry) => (
                <tr
                  key={entry.applicationUserId}
                  className="border-b border-amber-500"
                >
                  <td className="py-2">
                    <CircleUserRound className="w-6 h-6 ml-0 text-gray-700" />
                  </td>
                  <td className="py-2">
                    {entry.firstName} {entry.lastName}
                  </td>
                  <td className="py-2">{entry.minTimeConsumed} seconds</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
}
export default Leaderboard;
