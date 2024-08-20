import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchP5History, deleteReward } from '../api';
import styles from './P5History.module.css';

const P5History = () => {
    const { id } = useParams();
    const [p5History, setP5History] = useState([]);
    const [p5Balance, setP5Balance] = useState(0);

    useEffect(() => {
        const fetchHistory = async () => {
            const response = await fetchP5History(id);
            setP5History(response.data);
            // Assuming user data from props or user state
            // setP5Balance(user.p5Balance);
        };
        fetchHistory();
    }, [id]);

    const handleDelete = async (rewardId) => {
        await deleteReward(rewardId);
        setP5History(p5History.filter(history => history._id !== rewardId));
    };

    return (
        <div className={styles.container}>
            <h1>P5 History</h1>
            <button>
                <Link to={`/${id}/rewards/new`}>Create New Reward</Link>
            </button>
            <p>P5 Balance: {p5Balance}</p>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date-Time</th>
                        <th>P5 Given</th>
                        <th>User Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {p5History.map((history, index) => (
                        <tr key={history._id}>
                            <td>{index + 1}</td>
                            <td>{new Date(history.datetime).toLocaleString()}</td>
                            <td>{history.points}</td>
                            <td>{history.givenTo.name}</td>
                            <td>
                                <button onClick={() => handleDelete(history._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default P5History;