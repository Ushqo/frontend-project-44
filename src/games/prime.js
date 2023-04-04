import {
  welcomeMessage,
  getUserName,
  greetingUser,
  getRandomNumber,
  getUserAnswer,
  checkUserAnswer,
  counterOfIterations,
} from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Проверка является ли число простым
const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// Присваивание верного ответа для дальнейшего сравнивания с ответом пользователя
const getCorrectAnswer = (randomNumber) => {
  if (isPrime(randomNumber)) {
    return 'yes';
  }
  return 'no';
};

// Отдельная функция на верность формата ввода ответа пользователя
const checkCorrectnessOfUserAnswer = (userAnswer, userName) => {
  if ((userAnswer !== 'yes') && (userAnswer !== 'no')) {
    console.log('Not correct answer! You must answer "yes" or "no"!');
    console.log(`Let's try again, ${userName}`);
    return true;
  }
  return false;
};

// Сама игра
const startGame = () => {
  console.log(welcomeMessage);
  const userName = getUserName();
  greetingUser(userName);
  console.log(gameRules);

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(0, 50);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = getUserAnswer();
    if (checkCorrectnessOfUserAnswer(userAnswer, userName)) {
      break;
    }
    const correctAnswer = getCorrectAnswer(randomNumber);
    if (!checkUserAnswer(userAnswer, correctAnswer, userName)) {
      break;
    }
    counterOfIterations(i, userName);
  }
};

export default startGame;
