import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserView from './components/UserView';
import P5History from './components/P5History';
import RewardHistory from './components/RewardHistory';
import NewRewardForm from './components/NewRewardForm';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/new" element={<UserForm />} />
                <Route path="/:id" element={<UserView />} />
                <Route path="/:id/p5" element={<P5History />} />
                <Route path="/:id/rewards/new" element={<NewRewardForm />} />
                <Route path="/:id/rewards" element={<RewardHistory />} />
            </Routes>
        </Router>
    );
};

export default App;