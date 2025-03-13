import Header from '../components/Header';
import NavigationButtons from '../components/NavigationButtons';
import { User } from 'lucide-react';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <div className="h-screen bg-yellow-100">
      <Header />
      <div className="flex flex-col items-center pt-10 pb-2">
        <div className="flex">
          <div className="loginbackgroundwhitebox ">
            <User className="loginicon" />
            <div className="mt-0">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <NavigationButtons />
    </div>
  );
}

export default Login;
