// run_skills.js
// Quick runner to demo calculateNumbers from skills.js

const { calculateNumbers } = require('./skills');

function runExample(a, b) {
  try {
    const result = calculateNumbers(a, b);
    console.log(`Input: ${a}, ${b}`);
    console.table(result);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

runExample(10, 2);
runExample('7', '3');
runExample(5, 0);
