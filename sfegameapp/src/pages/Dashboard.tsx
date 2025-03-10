import DashboardHeader from '../components/DashboardHeader';
import { useLocation } from 'react-router-dom';
import Games from '../components/Games';

function Dashboard() {
  const location = useLocation();
  const { fullName } = location.state || { fullName: 'Guest' }; // Default to 'Guest' if no stat
  console.log(fullName);
  return (
    <div className="h-screen bg-yellow-50">
      <DashboardHeader fullname={fullName} />
      <Games />
    </div>
  );
}

export default Dashboard;
