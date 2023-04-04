import {
  welcomeMessage,
  getUserName,
  greetingUser,
  getRandomNumber,
  getUserAnswer,
  checkUserAnswer,
  counterOfIterations,
} from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

// Функция которые считает выражение
const getResultOfExpression = (num1, num2) => {
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

// Функция c выражением которое показыввется пользователю
const showExpression = (number1, number2) => {
  const result = `${number1} ${number2}`;
  return result;
};

// Сама игра
const startGame = () => {
  console.log(welcomeMessage);
  const userName = getUserName();
  greetingUser(userName);
  console.log(gameRules);

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    console.log(`Question: ${showExpression(randomNumber1, randomNumber2)}`);
    const userAnswer = Number(getUserAnswer());
    const correctAnswer = getResultOfExpression(randomNumber1, randomNumber2);
    if (!checkUserAnswer(userAnswer, correctAnswer, userName)) {
      break;
    }
    counterOfIterations(i, userName);
  }
};

export default startGame;
