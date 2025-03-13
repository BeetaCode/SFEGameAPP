import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/navigationbuttons.css';

function NavigationButtons() {
  // Initialize the useNavigate hook
  const navigate = useNavigate();

  // Get the current location
  const location = useLocation();

  return (
    <div className="flex flex-col items-center pt-5">
      <div className="flex space-x-4">
        {location.pathname !== '/signup' && (
          <button
            className="signupbutton shadow"
            onClick={() => navigate('/signup')}
          >
            Signup
          </button>
        )}

        {location.pathname !== '/login' && (
          <button
            className="loginbutton shadow"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        )}
        <button
          className="guestbutton shadow"
          onClick={() => navigate('/bananagame')} // Navigate to Home
        >
          Guest
        </button>
      </div>
    </div>
  );
}

export default NavigationButtons;
