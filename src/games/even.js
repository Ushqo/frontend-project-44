import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

function getGameData() {
  const randomNumber = getRandomNumber(0, 100);
  const gameQuestion = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const gameData = { gameQuestion, correctAnswer };
  return gameData;
}

const startBrainEven = () => startGame(gameRule, getGameData);

export default startBrainEven;
