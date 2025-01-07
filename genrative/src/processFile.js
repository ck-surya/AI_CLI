// src/processFile.js

const readInputFile = require('./readInput');
const callGeminiAPI = require('./callAPI');
const writeOutputToFile = require('./writeOutput');

// Main function to orchestrate the process
async function processFile(inputFilePath, outputFilePath) {
    try {
        // Step 1: Read input text from file
        const inputText = await readInputFile(inputFilePath);
        console.log('Input text:', inputText);

        // Step 2: Call Gemini API with the input text
        const apiResponse = await callGeminiAPI(inputText);
        console.log('API Response:', apiResponse);
        console.log(apiResponse.candidates[0].content.parts[0].text)
        // Step 3: Get the generated text from API response
        const outputText = apiResponse.candidates[0].content.parts[0].text|| 'No valid response from API';

        // Step 4: Write output to the file
        await writeOutputToFile(outputText, outputFilePath);
        console.log('Process completed successfully!');
    } catch (error) {
        console.error('Error in processing:', error.message);  // More informative error message
    }
}

module.exports = processFile;
