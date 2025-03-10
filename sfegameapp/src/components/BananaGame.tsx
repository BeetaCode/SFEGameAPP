import { useState, useEffect, useMemo } from 'react';
import { getBananaGame } from '../services/bananaGameService';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import DashboardHeader from './DashboardHeader';

function BananaGame() {
  const fullName = useMemo(
    () => sessionStorage.getItem('fullName') || 'Guest',
    []
  );
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState<number>(60); // 60 seconds timer
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

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

  //get question from API
  const fetchQuestion = async () => {
    try {
      const response = await getBananaGame();
      setQuestion(response.question);
      setAnswer(response.solution.toString());
      console.log(response.solution);
    } catch (error) {
      // Handle errors
      // Type guard to check if the error is an AxiosError
      if (error instanceof AxiosError) {
        if (
          Array.isArray(error.response?.data) &&
          error.response.data[0]?.includes('is already taken')
        ) {
          toast.error('There is an existing account with this email.');
        } else {
          toast.error(error.response?.data[0]);
        }
      } else if (error instanceof Error) {
        // Handle generic errors
        toast.error(error.message);
      } else {
        // Handle unknown errors
        toast.error('An unexpected error occurred.');
      }
    }
  };

  const checkAnswer = () => {
    if (userAnswer === answer) {
      setIsCorrect(true);
      setGameOver(true);
    } else {
      setIsCorrect(false);
    }
  };

  const resetGame = () => {
    setGameOver(false);
    setTimeLeft(60);
    setIsCorrect(null);
    setUserAnswer('');
    fetchQuestion();
  };

  return (
    <div className="h-screen bg-yellow-50">
      <DashboardHeader fullname={fullName} />
      <div className="flex justify-end">
        <h3 className="font-bold text-2xl text-green-600 mr-10 mt-3">
          Time Remaining: {timeLeft} seconds
        </h3>
      </div>
      {/* Game UI */}
      {!gameOver ? (
        <>
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
            <div className="flex items-center mt-10">
              <input
                className="block w-30 bg-yellow-200 text-gray-700 border border-gray-500 rounded py-2 px-4 mb-0 leading-tight focus:outline-none focus:bg-yellow-100 text-center"
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Your answer"
              />
              <button
                className="ml-5 bg-green-400 hover:bg-amber-600 text-white font-bold py-2 rounded w-20 cursor-pointer pb-2"
                onClick={checkAnswer}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      ) : null}

      {/* Conditional Message at the Bottom */}
      <div>
        {(() => {
          if (isCorrect) {
            return <h2>Answer is correct!</h2>;
          } else if (isCorrect === false) {
            return <h2>Wrong Answer. Please try again.</h2>;
          } else if (gameOver) {
            return <h2>Time is over! The correct answer was {answer}</h2>;
          }
          return null; // No message if the game is still running
        })()}
        {gameOver && <button onClick={resetGame}>Play Again</button>}
      </div>
    </div>
  );
}

export default BananaGame;
