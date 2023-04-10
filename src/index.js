import readlineSync from 'readline-sync';

const numberOfRoudns = 3;

const startGame = (gameRules, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 1; i <= numberOfRoudns; i += 1) {
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
