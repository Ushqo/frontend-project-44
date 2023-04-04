import readlineSync from 'readline-sync';
import { greetingUser, userName } from './cli.js';

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
const checkCorrectnessOfUserAnswer = (userAnswer, name) => {
  if ((userAnswer !== 'yes') && (userAnswer !== 'no')) {
    console.log('Not correct answer! You must answer "yes" or "no"!');
    console.log(`Let's try again, ${name}`);
    return true;
  }
  return false;
};

// Функция проверки ответа пользователя и реакции на его ответ
const checkUserAnswer = (userAnswer, correctAnswer, name) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${name}`);
  return false;
};

// Функция счётчик с поздравлениями
const counterOfIterations = (iteration, name) => {
  if (iteration === 2) {
    console.log(`Congratulations, ${name}!`);
  }
};

export {
  userName,
  greetingUser,
  getRandomNumber,
  getUserAnswer,
  checkCorrectnessOfUserAnswer,
  checkUserAnswer,
  counterOfIterations,
};
