import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createReward, fetchUsers, fetchUserById } from '../api';
import styles from './NewRewardForm.module.css';

const NewRewardForm = () => {
    const { id } = useParams();
    // const history = useHistory();
    const [users, setUsers] = useState([]);
    const [points, setPoints] = useState(0);
    const [selectedUser, setSelectedUser] = useState(null);
    const [p5Balance, setP5Balance] = useState(0);

    useEffect(() => {
        const fetchAllUsers = async () => {
            const response = await fetchUsers();
            setUsers(response.data.filter(user => user._id !== id));
        };
        fetchAllUsers();

        const fetchUser = async () => {
            const response = await fetchUserById(id);
            setP5Balance(response.data.p5Balance);
        };
        fetchUser();
    }, [id]);

    const handleSubmit = async () => {
        if (points > 0 && points <= 100 && points <= p5Balance) {
            await createReward(id, { points, givenById: id, givenTo: selectedUser });
            // history.push(`/${id}/p5`);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Create New Reward</h1>
            <div className={styles.formGroup}>
                <label>User</label>
                <select onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser}>
                    <option value="" disabled>Select User</option>
                    {users.map(user => (
                        <option key={user._id} value={user._id}>{user.name}</option>
                    ))}
                </select>
            </div>
            <div className={styles.formGroup}>
                <label>Points</label>
                <input
                    type="number"
                    value={points}
                    onChange={(e) => setPoints(e.target.value)}
                    min="1"
                    max="100"
                />
                <p>P5 Balance: {p5Balance}</p>
            </div>
            <div className={styles.buttons}>
                <button onClick={handleSubmit} disabled={points > 100 || points <= 0 || points > p5Balance}>
                    Submit
                </button>
                {/* <button onClick={() => history.push(`/${id}/p5`)}>Cancel</button> */}
            </div>
        </div>
    );
};

export default NewRewardForm;