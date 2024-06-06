import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const generatePass = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const specialKeys = '#$&+@*"\'!;/)(~•|£¢€';
  const numbers = '0123456789';

  let result = '';

  const getRandomChar = (str) => str[Math.floor(Math.random() * str.length)];

  for (let i = 0; i < 6; i++) {
    result += getRandomChar(letters);
  }
  for (let i = 0; i < 2; i++) {
    result += getRandomChar(specialKeys);
  }
  for (let i = 0; i < 2; i++) {
    result += getRandomChar(numbers);
  }

  // Shuffle the result to ensure randomness
  result = result.split('').sort(() => 0.5 - Math.random()).join('');

  return result;
};

const start = () => {
  rl.question('Generate Password \n input "ENTER" to generate: ', (answer) => {
    if (answer.trim().toUpperCase() === "ENTER") {
      console.log(`Generated Password: ${generatePass()}`);
    } else {
      console.log("Please enter the word 'ENTER' correctly");
    }
    rl.close();
  });
};

start();
