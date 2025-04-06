# COMP 3133 Assignment 2 - Backend
# Damanpreet Singh - 101415046
This is the backend for the COMP 3133 Assignment 2 project. It provides the necessary API endpoints to manage and process requests for the frontend application.

Installation
Follow these steps to install and set up the backend:

Clone the repository:

git clone https://github.com/damansingh13/101415046_comp3133_assignment2_backend.git
cd 101415046_comp3133_assignment2_backend
Install dependencies: npm install

Set up environment variables:

Make a copy of .env.example and rename it to .env. Then fill in the required values: cp .env.example .env

Environment Variables Here are the environment variables required to run the backend:
MONGO_URI: Your MongoDB connection string
JWT_SECRET: Secret key for JWT authentication
PORT: The port on which your server will run (default is 3000)

Start the server: npm start

Your server should now be running on http://localhost:3000.
Usage Once the server is up and running, you can use the provided API endpoints to interact with the backend. The frontend will be able to send requests to the backend, which will handle data and authentication.

API Endpoints POST /signup Registers a new user.

Request Body:
json Copy { "username": "string", "email": "string", "password": "string" } Response:
Status 200 OK if successful

Returns user data and authentication token

POST /login Authenticates a user and returns a JWT token.

Request Body:

json Copy { "email": "string", "password": "string" } Response:
Status 200 OK with authentication token

Status 401 Unauthorized if credentials are incorrect

GET /users Fetches all registered users (admin only).

Response:
Status 200 OK with list of users

Technologies This backend is built using the following technologies:

Node.js - Runtime environment
Express - Web framework for building the API
Mongoose - MongoDB ODM
JWT (JSON Web Token) - Authentication and authorization
dotenv - To manage environment variables
Bcrypt.js - Password hashing

Contributing If you want to contribute to this project, follow these steps:

Fork the repository
Create your branch (git checkout -b feature-xyz)
Commit your changes (git commit -am 'Add feature xyz')
Push to the branch (git push origin feature-xyz)
Open a Pull Request

## Create User

mutation {
signup(
username: "newuser"
email: "newuser@example.com"
password: "securepassword"
) {
user {
id
username
email
}
token
}
}

## Get All Employees

query {
employees {
id
first_name
last_name
email
gender
designation
salary
date_of_joining
department
employee_photo
}
}

## Create Employee

mutation {
addEmployee(
first_name: "John"
last_name: "Doe"
email: "john.doe@example.com"
gender: "Male"
designation: "Software Engineer"
salary: 60000
date_of_joining: "2025-02-12"
department: "Engineering"
) {
id
first_name
last_name
email
gender
designation
salary
date_of_joining
department
}
}

## Get Employee By ID

query {
employee(
id: "67ad179ea718654d62df2cba"
) {
id
first_name
last_name
email
gender
designation
}
}

## Update Employee ( ID )

mutation {
updateEmployee(
id: "67ad179ea718654d62df2cba"
first_name: "lalra"
last_name: "gorod"
) {
id
first_name
last_name
email
gender
designation
salary
date_of_joining
department
}
}

## Delete Employee ( ID )

mutation {
deleteEmployee(
id: "67ad179ea718654d62df2cba"
) {
id
first_name
last_name
email
gender
designation
salary
date_of_joining
department
employee_photo
}
}

## Search Employee By Department/Designation

query {
searchEmployees(
department: "Engineering"
) {
id
first_name
last_name
email
designation
department
}
}

License This project is licensed under the MIT License - see the LICENSE file for details.

Steps to customize:
Replace placeholders: Replace your-username with your GitHub username or the URL of the actual repository.
Database Setup: Ensure that the MONGO_URI and other environment variables are properly defined in your .env.example file.
API Endpoints: Adjust the API endpoints to match what is in your actual backend code. You can add more

