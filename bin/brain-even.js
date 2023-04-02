#!/usr/bin/env node
import readlineSync from 'readline-sync';

let userName = '';

const askUserName = () => {
  userName = readlineSync.question('May I have your name? ');
  return userName;
};

const greetingUser = () => {
  console.log(`Hello, ${askUserName()}!`);
};

let number = 0;

const getRandomNumber = () => {
  number = Math.floor(Math.random() * 100);
  return number;
};

let userAnswer = '';

const findOutEvenOrOdd = () => {
  for (let i = 0; i < 3; i += 1) {
    getRandomNumber();
    console.log(`Question: ${number}`);
    userAnswer = readlineSync.question('You answer: ');
    if ((userAnswer !== 'yes') && (userAnswer !== 'no')) {
      console.log('Not correct answer! You must answer "yes" or "no"!');
      console.log(`Let's try again, ${userName}`);
      break;
    } else if (number % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
    } else if (number % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
    } else if (userAnswer === 'yes') {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${userName}`);
      break;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${userName}`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

const playEvenOrNot = () => {
  console.log('Welcome to the Brain Games!');
  greetingUser();
  console.log('Answer "yes" if number is even, otherwise answer "no"');
  findOutEvenOrOdd();
};

playEvenOrNot();
