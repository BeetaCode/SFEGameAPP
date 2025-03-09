import { useNavigate } from 'react-router-dom';
import '../styles/navigationbuttons.css';

function NavigationButtons() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className="flex flex-col items-center pt-5">
      <div className="flex space-x-4">
        <button
          className="signupbutton shadow"
          onClick={() => navigate('/signup')} // Navigate to Signup
        >
          Signup
        </button>
        <button
          className="loginbutton shadow"
          onClick={() => navigate('/login')} // Navigate to Login
        >
          Login
        </button>
        <button
          className="guestbutton shadow"
          onClick={() => navigate('/home')} // Navigate to Home
        >
          Guest
        </button>
      </div>
    </div>
  );
}

export default NavigationButtons;
