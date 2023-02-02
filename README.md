# Getting started

## To get the Node server running locally:

- Clone this repo
- go to the backend directory
- `npm install` to install all required dependencies
- `check example.env` file and create your .env file to add your postgreSQL configs like in example
- `npm run dev` to start the local server

## Backend Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to PostgreSQL using Sequelize.
- `config/` - This folder contains configuration for sequelize and environment variables.
- `controllers/` - This folder contains logic for processing routes.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Sequelize models.
- `utils/` - This folder contain the initial function to add fake music dates for DB. 
** If you want to use this fake data, you must uncomment the function in app.js . The data contains 15 objects x3 duplicates(45). After adding the data, do not forget to comment back, otherwise every time you will be start the app with 45 more objects in DB :)


## To get the React server running locally:

- Clone this repo
- go to the frontend directory
- `npm install` to install all required dependencies
- `npm start` to run the react server locally
