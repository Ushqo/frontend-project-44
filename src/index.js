import readlineSync from 'readline-sync';

// Функция спрашивает и возвращает имя пользователя
const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

// Функция приветствует пользователя по имени
const greetingUser = (userName) => {
  console.log(`Hello, ${userName}!`);
};

// Функция возвращает случайное число в заданном интервале
const getRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

// Функция запроса ответа от пользователя
const getUserAnswer = () => {
  const userAnswer = readlineSync.question('You answer: ');
  return userAnswer;
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

// Функция проверки ответа пользователя и реакции на его ответ
const checkUserAnswer = (userAnswer, correctAnswer, userName) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

const showStartingMessage = (rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  greetingUser(userName);
  console.log(rules);
  return userName;
};

// Функция счётчик с поздравлениями
const counterOfIterations = (iteration, userName) => {
  if (iteration === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export {
  showStartingMessage,
  getRandomNumber,
  getUserAnswer,
  checkCorrectnessOfUserAnswer,
  checkUserAnswer,
  counterOfIterations,
};
