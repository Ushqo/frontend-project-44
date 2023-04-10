import readlineSync from 'readline-sync';

const roudnsCount = 3;

const startGame = (gameRule, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);

  for (let i = 1; i <= roudnsCount; i += 1) {
    const gameData = getGameData();
    const { gameQuestion, correctAnswer } = gameData;

    console.log(`Question: ${gameQuestion}`);

    const userAnswer = readlineSync.question('You answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
