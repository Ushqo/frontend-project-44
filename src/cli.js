import readlineSync from 'readline-sync';

const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const greetingUser = () => {
  console.log(`Hello, ${askUserName()}!`);
};

export default greetingUser;
