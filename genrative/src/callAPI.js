// src/callAPI.js

require('dotenv').config();  // Load environment variables from .env file (use npm install dotenv)
const fetch = require('node-fetch');  // Ensure you have node-fetch installed or use native fetch in Node 17+

// Function to call Gemini API
async function callGeminiAPI(promptText) {
    const apiKey = process.env.GEMINI_API_KEY;  // Securely retrieve the API key from environment variables

    if (!apiKey) {
        throw new Error('API key is missing. Please set GEMINI_API_KEY in your environment variables.');
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const requestData = {
        contents: [{
            parts: [{
                text: promptText
            }]
        }]
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API request failed with status ${response.status} and message: ${errorText}`);
        }

        const data = await response.json();
        return data;  // Return the response data from the API

    } catch (error) {
        console.error('Error calling the Gemini API:', error);
        throw error;  // Optionally, rethrow the error to be handled by the caller
    }
}

module.exports = callGeminiAPI;
