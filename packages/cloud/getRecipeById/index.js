const axios = require('axios');

async function main(args) {
    const recipeId = args.recipeId;
    if (!recipeId) {
        return {
            body: { error: 'No recipeId provided' },
            statusCode: 400,
        }
    }

    const API_KEY = process.env.API_KEY;
    const SPOON_URL = process.env.SPOON_URL;
    const URL_CTX = '/information'
    const API_URL = SPOON_URL + `/${recipeId}` + URL_CTX;

    try {
        const response = await axios.get(API_URL, {
            params: {
                apiKey: API_KEY
            }
        });

        return {
            body: response.data,
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