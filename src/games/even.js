import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (randomNumber) => {
  if (isEven(randomNumber)) {
    return 'yes';
  }
  return 'no';
};

const getGameData = () => {
  const randomNumber1 = getRandomNumber(0, 100);
  const gameQuestion = `${randomNumber1}`;
  const correctAnswer = getCorrectAnswer(randomNumber1);
  const gameData = { gameQuestion, correctAnswer };
  return gameData;
};

const startBrainEven = () => startGame(gameRules, getGameData);

export default startBrainEven;
