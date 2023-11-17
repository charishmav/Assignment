const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());
// Add a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, this is the log ingestor server!');
});
// Endpoint to handle log ingestion
app.post('/ingest', (req, res) => {
    const logData = req.body;
    // Process and store the log data as needed
    console.log('Received Log:', logData);
    res.status(200).send('Log ingested successfully');
});
// Query endpoint
app.post('/query', (req, res) => {
    // Handle log query logic
    // ...
    res.send('Query results');
});


// Start the server
app.listen(port, () => {
    console.log(`Log Ingestor Server listening at http://localhost:${port}`);
});

