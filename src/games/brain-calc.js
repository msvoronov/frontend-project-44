import runGame from '../index.js';
import getRandNumber from '../random.js';

// Выбрать рандомный оператор
const getRandOperator = () => {
  const operators = ['+', '-', '*'];
  const numberOfOperators = operators.length;
  const randomIndex = Math.floor(Math.random() * numberOfOperators);
  return operators[randomIndex];
};

// Получить верный ответ (как string)
const getCorrectAnswer = ([firstNumber, operator, secondNumber]) => {
  switch (operator) {
    case '+':
      return String(Number(firstNumber) + Number(secondNumber));
    case '-':
      return String(firstNumber - secondNumber);
    case '*':
      return String(firstNumber * secondNumber);
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

// Собираем данные для передачи их в игру
const getQuestionAndAnswer = () => {
  const multiplier = 100;
  const gameData = [getRandNumber(multiplier), getRandOperator(), getRandNumber(multiplier)];

  const question = gameData.join(' ');
  const correctAnswer = getCorrectAnswer(gameData);

  return [question, correctAnswer];
};

// Запустить игру
const runBrainCalc = () => {
  const rulesGame = 'What is the result of the expression?';
  runGame(rulesGame, getQuestionAndAnswer);
};

export default runBrainCalc;
