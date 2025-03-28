import '../styles/dashboard.css';
import { CircleUserRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

interface userData {
  fullname: string;
}

const DashboardHeader: React.FC<userData> = React.memo(({ fullname }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  console.log(token);

  const handleLogout = () => {
    // Remove the token
    localStorage.removeItem('token');
    // Clear all sessions
    sessionStorage.clear();
    navigate('/login'); // Redirect to login
  };

  return (
    <div className="bg-white h-15 shadow-md flex justify-between items-center">
      <div className="pt-2 pl-10">
        <h2 className="font-mono font-extrabold text-4xl embossed-text">
          GameHub
        </h2>
      </div>
      <div className="flex items-center gap-4 pr-6">
        <div className="pt-1 w-auto h-10 bg-gray-200 shadow-md rounded-s-md flex items-center px-4">
          <CircleUserRound className="w-6 h-6 ml-0 text-gray-700" />
          <h4 className="ml-2">Hi, {fullname}</h4>
        </div>
        {token ? (
          <button
            onClick={handleLogout}
            className="userlogoutbutton logoutbuttonshadow"
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
});

export default DashboardHeader;
