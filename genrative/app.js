// app.js

const path = require('path');
const processFile = require('./src/processFile');

// Define file paths
const inputFilePath = path.join(__dirname, 'input.txt');  // Input file path
const outputFilePath = path.join(__dirname, 'output.md'); // Output file path

// Start the file processing
processFile(inputFilePath, outputFilePath);


