# Employee Management REST API

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Express Validator

## Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Create Employee
- Get All Employees
- Get Employee by ID
- Update Employee
- Delete Employee
- Search
- Filter
- Sorting
- Pagination
- Global Error Handling

## Installation

### 1. Clone the repository

```bash

git clone <repository-url>

cd employee-management-api

```

### 2. Install dependencies

```bash

npm install

```

### 3. Create a `.env` file

```env

PORT=5001

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

JWT_EXPIRE=7d

```

### 4. Run the server

```bash

npm run dev

```

Server runs at:

```

http://localhost:5001

```



## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

GET /api/auth/me

### Employees

POST /api/employees

GET /api/employees

GET /api/employees/:id

PUT /api/employees/:id

DELETE /api/employees/:id



## Author

**Gurudeva P**