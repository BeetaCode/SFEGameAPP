import '../styles/home.css';
import NavigationButtons from '../components/NavigationButtons';
import HomeItems from '../components/HomeItems';

function Home() {
  return (
    <div className="h-screen bg-yellow-50">
      <div className="">
        <h3 className="font-sans font-bold text-amber-600 text-3xl text-center p-4">
          Banana Adventure
        </h3>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-sans font-bold text-black-600 text-4xl text-center p-0">
          Make Math Fun with Banana Adventure!
        </h2>
        <h4 className="font-sans text-black-600 text-xl text-center">
          Join our exciting journey through mathematical challenges and puzzles
        </h4>
      </div>
      <HomeItems />
      <NavigationButtons />
    </div>
  );
}

export default Home;
