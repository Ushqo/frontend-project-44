import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const userName = getUserName();

const greetingUser = (name) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${name}!`);
};

export { greetingUser, userName };
