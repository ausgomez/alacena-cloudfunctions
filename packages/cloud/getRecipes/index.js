const axios = require('axios');

async function main() {
    const API_KEY = process.env.API_KEY;
    const SPOON_URL = process.env.SPOON_URL;
    const URL_CTX = '/random'
    const API_URL = SPOON_URL + URL_CTX;

    try {
        const response = await axios.get(API_URL, {
            params: {
                apiKey: API_KEY,
                number: 3
            }
        });

        return {
            body: response.data.recipes,
        };
    }
    catch (error) {
        console.log(error);
        return {
            body: { error: error },
            statusCode: 500,
        }
    }
}

// IMPORTANT: Makes the function available as a module in the project.
// This is required for any functions that require external dependencies.
module.exports.main = main;