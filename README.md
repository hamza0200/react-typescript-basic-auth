# React app with basic auth and API integration

![image](https://user-images.githubusercontent.com/17562105/142771703-5da92e81-b5a3-4659-a783-564283735775.png)

This project was bootstrapped with react typescript template.\
Use the following credentials for login:

Username: `hamza`\
Password: `12345`

## Installation

In the project directory, you can run following command to install the dependencies:

`yarn install`

In the project directory, you can run following command to start the project:

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features
- The project is a single page application using React with 2 pages; Login and Dashboard
- The project uses basic auth for login and stores token in the local storage
- If logged-in user lands on login page, he will be redirected to dashboard and if a random (logged-out) user tires to access dashboard he will be redirected to login page
- Project is build with functional components with inline documentation for easy understanding
- [Material UI](https://material-ui.io) is used to create template
- [React Router Dom](https://reactrouter.com/) V6 is used to handle routings
- The project uses [Weather API](https://www.weatherapi.com/) to populate dashboard. The `secretKey` is stored in the `.env` configuration
- [Notistack](https://github.com/iamhosseindhv/notistack) is used to handle notification
- Login form has validations e.g. required fields and incorrect login credentials
- Used fetch, await and promises to integrate API

## Routes
Login: `http://localhost:3000`\
Dashboard: `http://localhost:3000/dashboard`


## How this project is built?
Install react-typescript project:\
`npx create-react-app weather-ts --template typescript`

Install material ui:\
`yarn add @material-ui/core`

Install material ui icons:\
`yarn add @material-ui/icons`

Install react router:\
`yarn add react-router`

Install react router dom:\
`yarn add react-router-dom`

Install Roboto font:\
`yarn add @fontsource/roboto`

Install notistack for notification:\
`yarn add notistack`

## Screenshots
`Required fields validation`
![image](https://user-images.githubusercontent.com/17562105/142771938-ba19a8db-75a7-4b5c-881c-97f6730870d1.png)

`Incorrect username or password`
![image](https://user-images.githubusercontent.com/17562105/142772024-f618e7fe-0b2c-41e6-b294-988448664b82.png)

`Dashboard`
![image](https://user-images.githubusercontent.com/17562105/142771710-282486ff-4954-4e36-b8c6-6307a37b1a95.png)


