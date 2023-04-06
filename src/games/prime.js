import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 0) {
    return false;
  }
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (randomNumber) => {
  if (isPrime(randomNumber)) {
    return 'yes';
  }
  return 'no';
};

const getGameData = () => {
  const randomNumber = getRandomNumber(0, 50);
  const gameQuestion = `${randomNumber}`;
  const correctAnswer = getCorrectAnswer(randomNumber);
  const gameData = { gameQuestion, correctAnswer };
  return gameData;
};

const startBrainPrime = () => startGame(gameRules, getGameData);

export default startBrainPrime;
