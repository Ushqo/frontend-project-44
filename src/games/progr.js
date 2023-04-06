import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'What number is missing in the progression?';

const getResultOfExpression = (length) => {
  const progression = [];
  const stepOfProgression = getRandomNumber(1, 10);
  const firstNumberInProgression = getRandomNumber(0, 100);
  progression.push(firstNumberInProgression);

  for (let i = 0; i < length; i += 1) {
    progression.push(progression[i] + stepOfProgression);
  }
  return progression;
};

const showExpression = (progression, indexOfHiddenNumber) => {
  const changedProgression = [...progression];
  changedProgression[indexOfHiddenNumber] = '..';
  return changedProgression.join(' ');
};

const getGameData = () => {
  const lengthOfProgression = getRandomNumber(5, 10);
  const indexOfHiddenNumber = getRandomNumber(0, lengthOfProgression - 1);
  const progression = getResultOfExpression(lengthOfProgression);
  const gameQuestion = `${showExpression(progression, indexOfHiddenNumber)}`;
  const correctAnswer = String(progression[indexOfHiddenNumber]);
  const gameData = { gameQuestion, correctAnswer };
  return gameData;
};

const startBrainProgression = () => startGame(gameRules, getGameData);

export default startBrainProgression;
