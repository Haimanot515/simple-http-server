# simple-http-server
This is a demo that explains a simple HTTP server built with Node.js and TypeScript. It serves mock data, demonstrates how interfaces are used for type safety, and shows asynchronous file reading in action.
# TypeScript HTTP Server Demo

This project is a simple HTTP server built with **Node.js** and **TypeScript**. It demonstrates:

- Serving **mock data** via HTTP routes
- Using **TypeScript interfaces** for type safety
- Asynchronous **file reading**
- Simple routing with **404 and 500 error handling**
- Using **dotenv** to configure the server port

---

## Features / Deliverables

1. **TypeScript Setup**
   - All source code is in the `src/` folder.
   - Compiled files are output to `dist/` via `tsc`.

2. **Interfaces**
   - `User` interface defines the structure of mock user data.
   - Ensures type safety when reading or serving data.

3. **Mock Data**
   - Stored in `src/data/users.json`.
   - Example:
   ```json
   [
     { "id": 1, "name": "Alice", "email": "alice@example.com" },
     { "id": 2, "name": "Bob", "email": "bob@example.com" }
   ]
