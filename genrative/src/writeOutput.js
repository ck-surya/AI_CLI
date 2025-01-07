// src/writeOutput.js

const fs = require('fs');

// Function to write the output to a file
function writeOutputToFile(output, outputFilePath) {
    return new Promise((resolve, reject) => {
        fs.writeFile(outputFilePath, output, 'utf8', (err) => {
            if (err) {
                reject('Error writing output file: ' + err);
            } else {
                resolve('Output saved to ' + outputFilePath);
            }
        });
    });
}

module.exports = writeOutputToFile;
