import {
  welcomeMessage,
  getUserName,
  greetingUser,
  getRandomNumber,
  getUserAnswer,
  checkUserAnswer,
  counterOfIterations,
} from '../index.js';

const gameRules = 'What number is missing in the progression?';

// Функция которые считает выражение (прогрессия)
const getResultOfExpression = (length) => {
  const progression = [];
  const stepOfProgression = getRandomNumber(1, 10);
  const firstNumberInProgression = getRandomNumber(0, 100);
  progression.push(firstNumberInProgression);

  for (let i = 0; i < length; i += 1) {
    progression.push(progression[i] + stepOfProgression);
  }
  const result = progression;
  return result;
};

// Функция c выражением которое показыввется пользователю
const showExpression = (progression, indexOfHiddenNumber) => {
  const changedProgression = progression;
  changedProgression[indexOfHiddenNumber] = '..';
  return changedProgression.join(' ');
};

// Сама игра
const startGame = () => {
  console.log(welcomeMessage);
  const userName = getUserName();
  greetingUser(userName);
  console.log(gameRules);

  for (let i = 0; i < 3; i += 1) {
    const lengthOfProgression = getRandomNumber(5, 10);
    const indexOfHiddenNumber = getRandomNumber(0, lengthOfProgression - 1);
    const progression = getResultOfExpression(lengthOfProgression);
    const correctAnswer = progression[indexOfHiddenNumber];
    console.log(`Question: ${showExpression(progression, indexOfHiddenNumber)}`);
    const userAnswer = Number(getUserAnswer());
    if (!checkUserAnswer(userAnswer, correctAnswer, userName)) {
      break;
    }
    counterOfIterations(i, userName);
  }
};

export default startGame;
