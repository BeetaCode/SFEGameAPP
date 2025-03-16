import { useState, useEffect, useMemo } from 'react';
import { getBananaGame } from '../services/bananaGameService';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import DashboardHeader from './DashboardHeader';
import PartyPopperAnimation from './PartyPopperAnimation'; // Import the Party Popper Animation
import '../styles/bananagame.css';
import { sendBananaGameData } from '../services/bananaGameService';
import { useNavigate } from 'react-router-dom';

function BananaGame() {
  const navigate = useNavigate();

  const fullName = useMemo(
    () => sessionStorage.getItem('fullName') || 'Guest',
    []
  );
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showPartyPopper, setShowPartyPopper] = useState(false); // Control Party Popper Animation

  useEffect(() => {
    fetchQuestion();
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  // Show Party Popper when answer is correct
  useEffect(() => {
    if (isCorrect) {
      setShowPartyPopper(true); // Show the Party Popper Animation
      setTimeout(() => setShowPartyPopper(false), 3000); // Hide the animation after 3 seconds
    }
  }, [isCorrect]);

  const fetchQuestion = async () => {
    try {
      const response = await getBananaGame();
      setQuestion(response.question);
      setAnswer(response.solution.toString());
      console.log(response.solution);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error('An unexpected error occurred.');
      }
    }
  };

  const checkAnswer = () => {
    if (userAnswer === answer) {
      if (fullName != 'Guest') {
        const bananaGameData = {
          timeConsumed: 60 - timeLeft,
          marks: null,
          grade: null,
          playedOn: null,
        };
        sendBananaGameData(bananaGameData);
      }
      setIsCorrect(true);
      setGameOver(true);
    } else {
      setIsCorrect(false);
      setUserAnswer('');
    }
  };

  const resetGame = () => {
    setGameOver(false);
    setTimeLeft(60);
    setIsCorrect(null);
    setUserAnswer('');
    setShowPartyPopper(false); // Hide the Party Popper Animation
    fetchQuestion();
  };

  return (
    <div className="h-screen bg-yellow-100">
      <DashboardHeader fullname={fullName} />
      <div className="flex justify-end">
        <h3 className="font-bold text-2xl text-green-600 mr-10 mt-3">
          Time Remaining: {timeLeft} seconds
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-amber-400 text-3xl p-4">Question:</h2>
        {question && (
          <div>
            <img
              className="mt-6 w-150 h-auto shadow-xl rounded-2xl"
              src={question}
              alt="Math Problem"
            />
          </div>
        )}
      </div>

      {/* Game UI */}
      {!gameOver ? (
        <>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center mt-10">
              <input
                className="bganswertextbox"
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Your answer"
              />
              <button
                className="bgsubmitbutton"
                onClick={checkAnswer}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      ) : null}

      {/* Conditional Message at the Bottom */}
      <div className="flex flex-col items-center justify-center text-center mt-5">
        {(() => {
          if (isCorrect) {
            return (
              <h2 className="text-green-400 text-3xl">Answer is correct! 🎉</h2>
            );
          } else if (isCorrect === false) {
            return (
              <h2 className="text-red-500 text-2xl">
                Wrong Answer. Please try again.
              </h2>
            );
          } else if (gameOver) {
            return (
              <h2 className="text-red-500 text-2xl">
                Time is over! The correct answer was {answer}
              </h2>
            );
          }
          return null;
        })()}
        {gameOver && (
          <button
            className="bgresetbutton"
            onClick={resetGame}
          >
            Play Again
          </button>
        )}
      </div>

      {/* Party Popper Animation */}
      {showPartyPopper && <PartyPopperAnimation />}
      {fullName != 'Guest' && (
        <div className="flex flex-col items-center justify-center text-center pt-5">
          <button
            className="bgdaschboardbutton"
            onClick={() => navigate('/Dashboard', { state: { fullName } })}
          >
            Back to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}

export default BananaGame;
