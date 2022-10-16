// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // Pass data into callback function
    if (!error) return callback(data);
  });
};

const getBreed = breed => {
  console.log("return Value: ", breed);
};

breedDetailsFromFile('Bombay', getBreed);