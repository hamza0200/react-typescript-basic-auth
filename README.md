# React app with basic auth and API integration

This project was bootstrapped with react typescript template.

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
- Single page application using React with 2 pages; Login and Dashboard
- The project uses basic auth for login and stores token in the local storage
- Project build with functional components with inline documentation for easy understanding
- [Material UI](https://material-ui.io) is used to create template
- [React Router Dom](https://reactrouter.com/) V6 is used to hanlde routings
- The project uses [Weather API](https://www.weatherapi.com/) to populate dashboard. The `secretKey` is stored in the `.env` configuration
- [Notistack](https://github.com/iamhosseindhv/notistack) is used to handle notification
- Login form has validations e.g. required fields and incorrect login credentials
- Used fetch, await and promises to integrate API


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
`Login`
![image](https://user-images.githubusercontent.com/17562105/142771703-5da92e81-b5a3-4659-a783-564283735775.png)

`Validations`
![image](https://user-images.githubusercontent.com/17562105/142771938-ba19a8db-75a7-4b5c-881c-97f6730870d1.png)

`Dashboard`
![image](https://user-images.githubusercontent.com/17562105/142771710-282486ff-4954-4e36-b8c6-6307a37b1a95.png)


