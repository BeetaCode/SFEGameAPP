import DashboardHeader from '../components/DashboardHeader';
import { useLocation } from 'react-router-dom';
import Games from '../components/Games';
import Leaderboard from '../components/Leaderboard';
import Rewards from '../components/Rewards';

function Dashboard() {
  const location = useLocation();
  const { fullName } = location.state || { fullName: 'Guest' }; // Default to 'Guest' if no state
  console.log(fullName);
  return (
    <div className="h-screen bg-yellow-100">
      <DashboardHeader fullname={fullName} />
      <div className="grid grid-cols-[65%_35%] gap-4 mt-5 mx-30">
        <div className="grid grid-rows-2">
          <Games />
          <Rewards />
        </div>
        <div className="grid row-span-2">
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
