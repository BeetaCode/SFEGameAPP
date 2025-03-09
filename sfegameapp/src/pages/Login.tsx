import Header from '../components/Header';
import NavigationButtons from '../components/NavigationButtons';

function Login() {
  return (
    <div className="h-screen bg-yellow-50">
      <Header />
      <p className="text-center">Welcome to the Login page!</p>
      <NavigationButtons />
    </div>
  );
}

export default Login;
