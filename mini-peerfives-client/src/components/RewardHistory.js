import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchP5History } from '../api';
import styles from './RewardHistory.module.css';

const RewardHistory = () => {
    const { id } = useParams();
    const [rewardHistory, setRewardHistory] = useState([]);
    const [rewardBalance, setRewardBalance] = useState(0);

    useEffect(() => {
        const fetchHistory = async () => {
            const response = await fetchP5History(id);
            setRewardHistory(response.data);
            // Assuming user data from props or user state
            // setRewardBalance(user.rewardBalance);
        };
        fetchHistory();
    }, [id]);

    return (
        <div className={styles.container}>
            <h1>Reward History</h1>
            <p>Reward Balance: {rewardBalance}</p>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date-Time</th>
                        <th>Rewards Received</th>
                        <th>User Name</th>
                    </tr>
                </thead>
                <tbody>
                    {rewardHistory.map((history, index) => (
                        <tr key={history._id}>
                            <td>{index + 1}</td>
                            <td>{new Date(history.datetime).toLocaleString()}</td>
                            <td>{history.points}</td>
                            <td>{history.givenBy.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RewardHistory;