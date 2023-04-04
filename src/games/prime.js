import {
  userName,
  greetingUser,
  getRandomNumber,
  getUserAnswer,
  checkCorrectnessOfUserAnswer,
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

// Сама игра
const startGame = () => {
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
