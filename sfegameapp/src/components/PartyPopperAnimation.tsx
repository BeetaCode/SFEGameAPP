import Lottie from 'lottie-react';
import partyPopperAnimation from '../assets/animations/PartyPopperImg.json'; // Adjust the path

const PartyPopperAnimation = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
      }}
    >
      <Lottie
        animationData={partyPopperAnimation}
        loop={false} // Set to true if you want the animation to loop
        autoplay={true}
        style={{ width: '300px', height: '300px' }} // Adjust size as needed
      />
    </div>
  );
};

export default PartyPopperAnimation;
