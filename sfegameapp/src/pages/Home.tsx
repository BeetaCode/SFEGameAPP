import '../styles/home.css';
import NavigationButtons from '../components/NavigationButtons';
import HomeItems from '../components/HomeItems';
import Header from '../components/Header';

function Home() {
  return (
    <div className="h-screen bg-yellow-100">
      <Header />
      <HomeItems />
      <NavigationButtons />
    </div>
  );
}

export default Home;
