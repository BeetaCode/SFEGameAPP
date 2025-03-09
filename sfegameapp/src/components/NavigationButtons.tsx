import '../styles/navigationbuttons.css';

function NavigationButtons() {
  return (
    <div className="flex flex-col items-center pt-5">
      <div className="flex space-x-4">
        <button className="signupbutton shadow">Signup</button>
        <button className="loginbutton shadow">Login</button>
        <button className="guestbutton shadow">Guest</button>
      </div>
    </div>
  );
}

export default NavigationButtons;
