// src/readInput.js

const fs = require('fs');

// Function to read input from file
function readInputFile(inputFilePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(inputFilePath, 'utf8', (err, data) => {
            if (err) {
                reject('Error reading input file: ' + err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = readInputFile;
