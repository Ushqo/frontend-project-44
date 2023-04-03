import readlineSync from 'readline-sync';

const welcomeMessage = 'Welcome to the Brain Games!';

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

// Функция проверки ответа пользователя и реакции на его ответ
const checkUserAnswer = (userAnswer, correctAnswer, userName) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${userName}`);
  return false;
};

// Функция счётчик с поздравлениями
const counterOfIterations = (iteration, userName) => {
  if (iteration === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export {
  welcomeMessage,
  getUserName,
  greetingUser,
  getRandomNumber,
  getUserAnswer,
  checkUserAnswer,
  counterOfIterations,
};
