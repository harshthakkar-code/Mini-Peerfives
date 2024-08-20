import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../api';
import styles from './UserList.module.css';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchAllUsers = async () => {
            const response = await fetchUsers();
            setUsers(response.data);
        };
        fetchAllUsers();
    }, []);

    return (
        <div className={styles.container}>
            <h1>Users List</h1>
            <Link to="/new" className={styles.createButton}>Create New User</Link>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>P5 Balance</th>
                        <th>Reward Balance</th>
                        <th>Login</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.p5Balance}</td>
                            <td>{user.rewardBalance}</td>
                            <td><Link to={`/${user._id}`}>Edit</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;