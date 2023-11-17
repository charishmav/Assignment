const readline = require('readline');
const axios = require('axios');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// "timestamp": "2023-09-15T08:00:00Z",
// 	"traceId": "abc-xyz-123",
//     "spanId": "span-456",
//     "commit": "5e5342f",
//     "metadata": {
//         "parentResourceId": 
const searchCriteria = ['level', 'message', 'resourceId', 'timestamp', 'spanId', 'commit', 'metadata', 'parentResourceId'];

const userInput = {};

function getUserInput(index) {
    if (index < searchCriteria.length) {
        rl.question(`Enter ${searchCriteria[index]} to search: `, (input) => {
            userInput[searchCriteria[index]] = input;
            getUserInput(index + 1);
        });
    } else {
        axios.post('http://localhost:3000/query', userInput)
            .then(response => {
                console.log('Search Results:', response.data);
            })
            .catch(error => {
                console.error('Error:', error.message);
            })
            .finally(() => {
                rl.close();
            });
    }
}

getUserInput(0);
