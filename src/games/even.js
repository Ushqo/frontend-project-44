import {
  welcomeMessage,
  getUserName,
  greetingUser,
  getRandomNumber,
  getUserAnswer,
  checkUserAnswer,
  counterOfIterations,
} from '../index.js';

const gameRules = 'Answer "yes" if number is even, otherwise answer "no".';

// Проверка на четность
const isEven = (number) => {
  if (number % 2 === 0) return true;
  return false;
};

// Присваивание верного ответа для дальнейшего сравнивания с ответом пользователя
const getCorrectAnswer = (randomNumber) => {
  if (isEven(randomNumber)) {
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
    const randomNumber = getRandomNumber(0, 100);
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
