
# Dating App Registration Form

## Project Description
This project is a registration form for a dating website. It allows users to register and log in using email and password. After a successful registration, the user is redirected to the authorized area with an authentication token.

## Features
- Registration form with email and password fields.
- Form validation (email format and password length).
- Integration with backend API for login and registration.
- Redirection to the authorized user area with an authentication token.
- Error handling and validation feedback.

## Tech Stack
- **React** (TypeScript)
- **RTK Query** for managing API requests
- **SCSS** for styling
- **React Hooks** for managing state

## Prerequisites
To run this project locally, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (Node package manager) or **yarn**

## How to Run the Project

### Step 1: Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/your-username/your-repository.git
```

### Step 2: Navigate to the Project Directory
```bash
cd your-repository
```

### Step 3: Install Dependencies
Install the required dependencies using npm:
```bash
npm install
```
Or if you're using yarn:
```bash
yarn install
```

### Step 4: Start the Development Server
To run the project locally in development mode, use the following command:
```bash
npm start
```
Or with yarn:
```bash
yarn start
```
The app will be available at `http://localhost:3000`.

### Step 5: Running API Server
The app interacts with a backend API. For testing, the required API endpoints should be available:
- **GET** request for login: `https://api.dating.com/identity`
- **PUT** request for registration: `https://api.dating.com/identity`

If you do not have access to the real API, you can create a mock API server locally using tools like **json-server** or **express.js** to simulate the API behavior.

### Step 6: Testing the Registration
To test the registration functionality:
- Enter a valid email in the email field (e.g., `my@example.com`).
- Enter a password that is at least 8 characters long.
- After successful registration or login, you will be redirected to an authorized user page with the token displayed in the URL.

## Validation and Error Handling
- If the email is invalid or the password is too short, the form will display validation errors.
- If there is an error during the registration or login process, an error message will appear on the form.

## How to Build the Project for Production
To create an optimized production build, use the following command:
```bash
npm run build
```
Or with yarn:
```bash
yarn build
```
This will generate a `build` directory with all the necessary static files that you can deploy to a web server.

## Deployment
Once you have built the project, you can deploy the `build` folder to any static hosting service like:
- **Netlify**
- **Vercel**
- **GitHub Pages**

For example, to deploy to **GitHub Pages**:
1. Install the `gh-pages` package:
   ```bash
   npm install --save gh-pages
   ```
2. Add the following to your `package.json` file:
   ```json
   "homepage": "http://your-username.github.io/your-repository",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy the project:
   ```bash
   npm run deploy
   ```

## Notes
- Ensure that the API endpoints for authentication and registration are working correctly.
- In case of CORS issues with the API, make sure the server allows requests from `http://localhost:3000`.

## Author
- **Your Name** - [Your GitHub Profile](https://github.com/your-username)
