import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;

  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
  }
  return number1;
};

const getGameData = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const gameQuestion = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(getCorrectAnswer(randomNumber1, randomNumber2));
  const gameData = { gameQuestion, correctAnswer };
  return gameData;
};

const startBrainGsd = () => startGame(gameRule, getGameData);

export default startBrainGsd;
