# Second Brain Project

## Overview

The Second Brain Project is designed to be your digital memory, helping you save and retrieve various types of information, such as links, tasks, ideas, and more. Whether it's an idea you had for a TypeScript project or a link you found interesting, you can easily save it to this project and query/search for it later.

## Features

- **Save and Retrieve Information:** Store different types of content such as links, tasks, and ideas.
- **Advanced Search:** Query your saved content with ease, e.g., "What was the idea I shared about the TypeScript project?"
- **User Authentication:** Secure your data with JWT-based authentication.
- **Validation:** Ensure data integrity using Zod validation.

## Tech Stack

- **Frontend:**
  - **React:** For building the user interface.
  - **TypeScript:** Ensuring type safety and robustness in your React code.

- **Backend:**
  - **Express:** For building the server-side API.
  - **TypeScript:** For a type-safe backend.
  - **Zod:** For schema validation.
  - **GPT:** To assist with advanced query capabilities.
  - **MongoDB:** For storing your saved content.
  - **jsonwebtoken (JWT):** For securing user authentication.

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/second-brain.git
   cd second-brain
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application:**

   ```sh
   npm start
   ```

## Usage

### Saving Content

Use the application interface to save links, tasks, ideas, and more. Each type of content can be categorized and tagged for easier retrieval.

### Querying Content

Leverage the search functionality to query your saved content. For example, you can search for "ideas about the TypeScript project" to quickly find relevant entries.

## API Endpoints

### Authentication

- **Register:**
  - `POST /api/auth/register`
  - Request body: `{ "username": "string", "email": "string", "password": "string" }`

- **Login:**
  - `POST /api/auth/login`
  - Request body: `{ "email": "string", "password": "string" }`

### Content Management

- **Save Content:**
  - `POST /api/content`
  - Request body: `{ "type": "string", "title": "string", "body": "string", "tags": ["string"] }`

- **Query Content:**
  - `GET /api/content?search=your_query`

## Validation

All request data is validated using Zod to ensure data integrity and prevent invalid data from being stored.

## Security

User authentication is handled using JSON Web Tokens (JWT). Ensure you keep your JWT secret safe and secure.
