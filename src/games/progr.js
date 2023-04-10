import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What number is missing in the progression?';
const lengthOfProgression = getRandomNumber(5, 10);

const getProgression = (firstNumber, step, length) => {
  const progression = [];
  progression.push(firstNumber);
  for (let i = 0; i < length; i += 1) {
    progression.push(progression[i] + step);
  }
  return progression;
};

const getGameData = () => {
  const indexOfHiddenNumber = getRandomNumber(0, lengthOfProgression - 1);
  const firstInProgression = getRandomNumber(0, 100);
  const stepOfProgression = getRandomNumber(1, 10);
  const progression = getProgression(firstInProgression, stepOfProgression, lengthOfProgression);
  const correctAnswer = String(progression[indexOfHiddenNumber]);
  progression[indexOfHiddenNumber] = '..';
  const gameQuestion = progression.join(' ');
  const gameData = { gameQuestion, correctAnswer };
  return gameData;
};

const startBrainProgression = () => startGame(gameRule, getGameData);

export default startBrainProgression;
