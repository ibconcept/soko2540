# Strapi and Angular Project

This project is a full-stack application that integrates Strapi as the backend and Angular as the frontend. The goal is to migrate content from an existing OpenCart directory into this new architecture.

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.

### Backend

- **src/api**: Contains API endpoints for the Strapi application. Models and controllers for handling data from OpenCart will be created here.
- **src/config**: Holds configuration files, including database settings and environment variables.
- **src/extensions**: For custom extensions to modify or extend Strapi's default functionality.
- **src/middlewares**: Contains custom middleware functions for the Strapi application.
- **package.json**: Lists dependencies and scripts for running the Strapi server.
- **strapi.config.js**: Main configuration settings for the Strapi application.

### Frontend

- **src/app/components**: Reusable Angular components for the application.
- **src/app/pages**: Different pages of the Angular application, each representing a route.
- **src/app/services**: Services for handling business logic and data fetching.
- **src/assets**: Static assets such as images and stylesheets.
- **src/environments**: Environment-specific configuration files.
- **angular.json**: Configuration file for the Angular CLI.
- **package.json**: Lists dependencies and scripts for the Angular application.
- **tsconfig.json**: TypeScript configuration file specifying compiler options.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Strapi CLI installed globally.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd strapi-angular-project
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

- To start the Strapi backend:
  ```
  cd backend
  npm run develop
  ```

- To start the Angular frontend:
  ```
  cd frontend
  ng serve
  ```

Visit `http://localhost:4200` to view the Angular application and `http://localhost:1337` for the Strapi backend.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.