import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getResultOfExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown '${operator}'!`);
  }
};

const getGameData = () => {
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(0, 100);
  const operator = operators[getRandomNumber(0, operators.length)];
  const gameQuestion = `${randomNumber1} ${operator} ${randomNumber2}`;
  const correctAnswer = String(getResultOfExpression(randomNumber1, randomNumber2, operator));
  const gameData = { gameQuestion, correctAnswer };
  return gameData;
};

const startBrainCalc = () => startGame(gameRule, getGameData);

export default startBrainCalc;
