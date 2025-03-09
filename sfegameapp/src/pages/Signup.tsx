import Header from '../components/Header';
import NavigationButtons from '../components/NavigationButtons';
import SignupForm from '../components/SignupForm';
import '../styles/signup.css';
import { UserPlus } from 'lucide-react';

function Signup() {
  return (
    <div className="h-screen bg-yellow-50">
      <Header />
      <div className="flex flex-col items-center pt-10 pb-2">
        <div className="flex">
          <div className="backgroundwhitebox ">
            <UserPlus className="signupicon" />
            <div className="mt-0">
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
      <NavigationButtons />
    </div>
  );
}

export default Signup;
