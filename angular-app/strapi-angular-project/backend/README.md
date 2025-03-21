# Strapi Angular Project

## Overview
This project is a full-stack application that integrates Strapi as the backend and Angular as the frontend. The backend is responsible for managing data and providing API endpoints, while the frontend handles the user interface and interactions.

## Backend Structure
The backend is built using Strapi and follows a structured directory layout:

- **src/api**: Contains API endpoints, models, and controllers for handling data.
- **src/config**: Holds configuration files for database settings and environment variables.
- **src/extensions**: Custom extensions to modify or extend Strapi's default functionality.
- **src/middlewares**: Custom middleware functions for additional processing of requests.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Backend
To start the Strapi server, run:
```
npm run develop
```
This will start the Strapi application in development mode.

### API Endpoints
Once the server is running, you can access the API endpoints at `http://localhost:1337`.

## Frontend Structure
The frontend is built using Angular and includes:

- **src/app/components**: Reusable components for the application.
- **src/app/pages**: Different pages representing various routes.
- **src/app/services**: Services for business logic and data fetching.

## Running the Frontend
To run the Angular application, navigate to the frontend directory and use:
```
cd frontend
npm install
npm start
```
This will start the Angular application in development mode.

## Contributing
Feel free to contribute to this project by submitting issues or pull requests.

## License
This project is licensed under the MIT License.