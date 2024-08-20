
# Mini Peerfives Backend

## Overview
Mini Peerfives allows users to reward other people with P5 (Peerfives) points.

## Setup Instructions

### Prerequisites
- Node.js and npm
- MongoDB (running locally or through a service like MongoDB Atlas)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/mini-peerfives-backend.git
   cd mini-peerfives-backend
Install dependencies:

bash
 
npm install
Configure the database connection:

Ensure MongoDB is running locally or provide the connection URI in the app.js file.
Run the server:

bash
 
npm start
API Endpoints
User Endpoints
Create a new user:
bash
 
POST /users
{
    "name": "John Doe"
}
Get all users:
bash
 
GET /users
Get a user by ID:
bash
 
GET /users/:id
Edit a user:
bash
 
PUT /users/:id
{
    "name": "Jane Doe"
}
Delete a user:
bash
 
DELETE /users/:id
Reward Endpoints
Get reward history for a user:
bash
 
GET /rewards/:userId
Create a new reward:
bash
 
POST /rewards/:userId
{
    "points": 20,
    "givenById": "someUserId"
}
Delete a reward (reverse the P5 given):
bash
 
DELETE /rewards/:rewardId
shell
 

### Frontend (React)

Create a file named `README.md` in your frontend project directory:

```markdown
# Mini Peerfives Frontend

## Overview
Frontend for Mini Peerfives application, built using React.

## Setup Instructions

### Prerequisites
- Node.js and npm

### Installation

1. **Clone the repository**:
   ```bash
   git clone url
   cd mini-peerfives-frontend
Install dependencies:

bash
 
npm install
Run the development server:

bash
 
npm start