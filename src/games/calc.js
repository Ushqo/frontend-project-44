import {
  welcomeMessage,
  getUserName,
  greetingUser,
  getRandomNumber,
  getUserAnswer,
  checkUserAnswer,
  counterOfIterations,
} from '../index.js';

const gameRules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

// Функция которые считает выражение
const getResultOfExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

// Функция c выражением которое показыввется пользователю
const showExpression = (number1, number2, operator) => {
  const result = `${number1} ${operator} ${number2}`;
  return result;
};

// Сама игра
const startGame = () => {
  console.log(welcomeMessage);
  const userName = getUserName();
  greetingUser(userName);
  console.log(gameRules);

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = getRandomNumber(0, 100);
    const randomNumber2 = getRandomNumber(0, 100);
    const operator = operators[getRandomNumber(0, operators.length)];
    console.log(`Question: ${showExpression(randomNumber1, randomNumber2, operator)}`);
    const userAnswer = Number(getUserAnswer());
    const correctAnswer = getResultOfExpression(randomNumber1, randomNumber2, operator);
    if (!checkUserAnswer(userAnswer, correctAnswer, userName)) {
      break;
    }
    counterOfIterations(i, userName);
  }
};

export default startGame;
