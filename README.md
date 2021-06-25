# Periodic Tables: Restaurant Reservation System

> This App serves as a reservation system for a restuarant.
> The live app can be seen [here](https://front-end-livid-alpha.vercel.app/dashboard)

# API Documentation

## Resources: Reservations and Tables

### Reservations

Reservations are how a user schedules and keeps track of when people are coming to dine at the restaurant

#### Available Methods

GET /reservations -> returns all reservations

GET /reservations?date={date} -> returns all reservations for that date in the format date=YYYY-MM-DD

POST /reservations -> creates a new reservation

PUT /reservations/{reservation_id} -> Edits a specific reservation

PUT /reservations/{reservation_id}/status -> Updates status of a specific reservation

### Tables

Tables are where a user will seat people coming to dine at the restaurant.

#### Available Methods

GET /tables -> returns all the tables that have been created

POST /tables -> creates a new tables

PUT /tables/{table_id}/seat -> assigns a reservations to a table

DELETE /tables/{table_id}/seat -> removes a reservation from a table

## Screenshots

Dashboard: 
![Dashboard](https://github.com/jefftruejones/starter-restaurant-reservation/blob/main/front-end/public/dashboard.png)

Create Reservation:
![CreateReservation](https://github.com/jefftruejones/starter-restaurant-reservation/blob/main/front-end/public/createreservation.png)

Search:
![Search](https://github.com/jefftruejones/starter-restaurant-reservation/blob/main/front-end/public/search.png)

Create Table:
![CreateTable](https://github.com/jefftruejones/starter-restaurant-reservation/blob/main/front-end/public/createtable.png)

##Use Summary:

This application is intended for those who work in a restaurant to create and keep track of reservations. Customer's cannot make reservations themselves, and it is intended for workers to take reservations over the phone. Reservations can be created, cancelled, searched for, displayed by date, and assigned to specific tables. Restaurant workers can create new entries for however many tables there are in the restaurant and then assign reservations to specific tables.

##Technology Used:

For this project I utilized create-react-app of React.js to create the user-interface and vanilla CSS for styling. For the backend, I created an Express.js server interacting with PostgreSQL database and used the Knwx library as a query builder.


## Database setup

1. Set up four new ElephantSQL database instances - development, test, preview, and production - by following the instructions in the "PostgreSQL: Creating & Deleting Databases" checkpoint.
1. After setting up your database instances, connect DBeaver to your new database instances by following the instructions in the "PostgreSQL: Installing DBeaver" checkpoint.

### Knex

Run `npx knex` commands from within the `back-end` folder, which is where the `knexfile.js` file is located.

## Installation

1. Fork and clone this repository.
1. Run `cp ./back-end/.env.sample ./back-end/.env`.
1. Update the `./back-end/.env` file with the connection URL's to your ElephantSQL database instance.
1. Run `cp ./front-end/.env.sample ./front-end/.env`.
1. You should not need to make changes to the `./front-end/.env` file unless you want to connect to a backend at a location other than `http://localhost:5000`.
1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.




