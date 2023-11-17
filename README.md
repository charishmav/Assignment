# Assignment
# Log Ingestor and Query Interface

A system for efficiently handling log data and providing a user-friendly interface for querying logs.

## How to Run

1. Clone the repository:

   git clone https://github.com/charishmav/Assignment.git
   cd Assignment
A good README file provides essential information about your project, helping others understand how to use it and contributing to its success. Below is a template you can use as a starting point for your log ingestor and query interface project:


# Log Ingestor and Query Interface

This project includes a log ingestor system and a query interface for efficiently handling log data.

## Log Ingestor

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the log ingestor:
   ```bash
   node index.js
   ```
   The log ingestor will be running on http://localhost:3000.

### Ingest Logs

Use the provided HTTP endpoint to ingest logs in the specified format.

Example:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"level": "info", "message": "Log message", "timestamp": "2023-09-16T12:00:00Z"}' http://localhost:3000/ingest
```

## Query Interface

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the query interface:
   ```bash
   node querycli.js -l info
   ```
   Customize the command-line options for specific log queries.

### Available Options

- `-l, --level`: Filter logs by level.
  Example: `node querycli.js -l error`


## Sample Queries

1. Find all logs with the level set to "error":
   ```bash
   node querycli.js -l error
   ```

2. Search for logs with the message containing the term "Failed to connect":
   ```bash
   node querycli.js -m "Failed to connect"
   ```

3. Retrieve all logs related to resourceId "server-1234":
   ```bash
   node querycli.js --resourceId server-1234
   ```

4. Filter logs between the timestamp "2023-09-10T00:00:00Z" and "2023-09-15T23:59:59Z":
   ```bash
   node querycli.js -t "2023-09-10T00:00:00Z" -t "2023-09-15T23:59:59Z"
   ```

## System Design

The system consists of two main components:

- **Log Ingestor:** Handles HTTP requests on port 3000, ingesting logs in the provided format.
- **Query Interface:** Provides a command-line interface for users to perform searches based on specified fields.

## Features Implemented

- Log Ingestor:
  - Handles HTTP requests on port 3000.
  - Efficiently ingests logs in the provided format.

- Query Interface:
  - User-friendly CLI for log queries.
  - Supports full-text search and specific field filters (level, message, resourceId, etc.).

## Identified Issues

- [Issue 1]: Description of the issue.
- [Issue 2]: Description of another issue.

## Bonus Functionalities

- Real-time log ingestion and searching capabilities.
- Role-based access to the query interface.



## License

This project is licensed under the [MIT License](LICENSE).
```


