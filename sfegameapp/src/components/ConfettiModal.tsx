import React from 'react';
import Confetti from 'react-confetti';
import Modal from 'react-modal';

// Set the root element for accessibility
Modal.setAppElement('#root'); // Replace '#root' with your app's root element ID

interface ConfettiModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ConfettiModal: React.FC<ConfettiModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Congratulations Modal"
      className="modal"
      overlayClassName="overlay"
      ariaHideApp={false} // Disable aria-hidden on the rest of the app
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-green-500 mb-4">
          Congratulations! 🎉
        </h2>
        <p className="text-lg text-gray-700">You got the correct answer!</p>
        <button
          className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={onRequestClose}
        >
          Close
        </button>
      </div>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={true} // Keep the confetti recycling
        numberOfPieces={500} // Increase the number of confetti pieces
        gravity={0} // Set gravity to 0 to prevent falling
        initialVelocityY={15} // Adjust the initial upward velocity
        wind={0.1} // Adjust the wind to control horizontal movement
        confettiSource={{
          x: window.innerWidth / 2, // Start from the middle horizontally
          y: window.innerHeight / 2, // Start from the middle vertically
          w: 10, // Width of the source area
          h: 10, // Height of the source area
        }}
        style={{
          zIndex: 2,
          position: 'absolute',
          pointerEvents: 'none',
          inset: '200px', // Adjust the inset as needed
          top: '100%', // Additional positioning
          left: '100%', // Additional positioning
          transform: 'translate(-52%, -30%)', // Center the canvas
        }}
      />
    </Modal>
  );
};

export default ConfettiModal;
