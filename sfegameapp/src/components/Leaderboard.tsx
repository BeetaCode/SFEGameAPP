import { useEffect, useState } from 'react';
import { leaderboardService } from '../services/leaderboardService';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import {
  leaderboarddata,
  leaderboardEntry,
} from '../interfaces/leaderboarddata';
import { data } from 'react-router-dom';

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState<leaderboarddata>({
    result: [],
  });

  useEffect(() => {
    getLeaderboardData();
  }, []);

  const getLeaderboardData = async () => {
    try {
      const response = await leaderboardService();
      console.log(response, data);
      setLeaderboardData(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="bg-white h-120 shadow-md flex flex-col justify-between items-start rounded-2xl p-5">
      <div>
        <h2 className="font-bold text-xl pl-1">Leaderboard</h2>
      </div>
      <div className="w-full mb-70">
        {leaderboardData.result.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Rank</th>
                <th className="text-left">Name</th>
                <th className="text-left">Time Consumed</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.result.map(
                (entry: leaderboardEntry, index: number) => (
                  <tr
                    key={entry.applicationUserId}
                    className="border-b"
                  >
                    <td className="py-2">{index + 1}</td>
                    <td className="py-2">
                      {entry.firstName} {entry.lastName}
                    </td>
                    <td className="py-2">{entry.minTimeConsumed} seconds</td>
                  </tr>
                )
              )}
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
