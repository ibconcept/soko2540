# Strapi and Angular Project

This project is a full-stack application that integrates Strapi as the backend and Angular as the frontend. The goal is to migrate content from an OpenCart directory into this new architecture.

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.

### Backend

- **src/api**: Contains the API endpoints for the Strapi application. Models and controllers for handling data from OpenCart will be created here.
- **src/config**: Holds configuration files, including database settings and environment variables.
- **src/extensions**: For custom extensions to Strapi, allowing modifications to default functionality.
- **src/middlewares**: Contains custom middleware functions for the Strapi application.
- **package.json**: Configuration file for the backend, listing dependencies and scripts for running the server.
- **strapi.config.js**: Main configuration settings for the Strapi application, including plugin and middleware settings.
- **README.md**: Documentation specific to the backend.

### Frontend

- **src/app/components**: Reusable Angular components for the application.
- **src/app/pages**: Different pages of the Angular application, each representing a route.
- **src/app/services**: Services handling business logic and data fetching.
- **src/assets**: Static assets such as images and stylesheets.
- **src/environments**: Environment-specific configuration files for the Angular application.
- **angular.json**: Configuration file for the Angular CLI, specifying project settings and build configurations.
- **package.json**: Configuration file for the frontend, listing dependencies and scripts for building and serving the application.
- **tsconfig.json**: Configuration file for TypeScript, specifying compiler options and files to include.

## Setup Instructions

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd strapi-angular-project
   ```

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the Strapi server:
     ```
     npm run develop
     ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```
     cd ../frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the Angular application:
     ```
     ng serve
     ```

## Migration from OpenCart

- Analyze the existing OpenCart data structure.
- Create corresponding models in the Strapi backend.
- Develop controllers to handle data operations.
- Implement services in Angular to interact with the Strapi API.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.