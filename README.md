# ExpresJS/SQLite3 API for frontend

## Description

Node.js CRUD application based on the SQLite database design and Express.js framework

## Features

* User registration and login
* Authentication via JWT
* CRUD for blog posts
* SQLite database
* sequelize ORM

## Future Features

* Filtering Via categories and brands
* Cart Add/ Edit/ Remove Functionality
* Admin Panel
* Add/ Remove/ Edit Brands, products and Categories in Admin Panel
* Customer Register/ login

## Getting Started

* Add your  preferrd PORT to the .env file  (you need to create your .env file in the root of the project)
* Example 
PORT=5000
* Choose a random string as JWT secret or generate it in your terminal
```
node
console.log(crypto.randomBytes(64).toString('hex'));
```
* Copy it and place in in your .env file
* Example
SECRET="yourrandomlygeneratedsecret"
* Start the application
```
nodemon server.js
```