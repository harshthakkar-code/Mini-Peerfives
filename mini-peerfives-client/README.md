Prerequisites
Node.js and npm
Installation
Clone the repository:

bash
Copy code
git clone 
cd mini-peerfives-frontend
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm start
Project Structure
css
Copy code
src/
├── components/
│   ├── UserList.js
│   ├── UserForm.js
│   ├── UserView.js
│   ├── P5History.js
│   ├── RewardHistory.js
│   └── NewRewardForm.js
├── App.js
├── index.css
├── index.js
└── api.js
Pages and Routes
Users List View (Default View, route: /)
Displays a list of all users.
Contains a button to create a new user (/new).
Each user row contains a login button to view/edit user details (/:id).
New User View (route: /new)
Contains a form to create a new user.
Save button saves the user and redirects back to the user list.
Cancel button redirects back to the user list.
View User (route: /:id)
Shows a form with user details.
Contains buttons to view P5 balance (/:id/p5) and reward balance (/:id/rewards).
P5 History (route: /:id/p5)
Displays the user's P5 balance and history.
Contains a button to create a new reward (/:id/rewards/new).
Reward History (route: /:id/rewards)
Displays the user's reward balance and history.
New Reward Form (route: /:id/rewards/new)
Form to create a new reward.
Contains a dropdown of users (excluding self) to whom rewards can be given.
Validates that points do not exceed the maximum limit or the user's P5 balance.
Submit button creates the reward and redirects back to P5 history.
Cancel button redirects back.