import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchUserById } from '../api';
import styles from './UserView.module.css';

const UserView = () => {
    const { id } = useParams();
    const [user, setUser] = useState({ name: '', p5Balance: 0, rewardBalance: 0 });

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetchUserById(id);
            setUser(response.data);
        };
        fetchUser();
    }, [id]);

    return (
        <div className={styles.container}>
            <h1>View User</h1>
            <form className={styles.formGroup}>
                <label>Name:</label>
                <span>{user.name}</span>
                <div className={styles.buttons}>
                    <button>
                        <Link to={`/${id}/p5`}>P5 Balance: {user.p5Balance}</Link>
                    </button>
                    <button>
                        <Link to={`/${id}/rewards`}>Reward Balance: {user.rewardBalance}</Link>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserView;