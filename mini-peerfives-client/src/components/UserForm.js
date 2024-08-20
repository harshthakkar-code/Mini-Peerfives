import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createUser, updateUser, fetchUserById } from '../api';
import styles from './UserForm.module.css';

const UserForm = () => {
    const { id } = useParams();
    // const history = useHistory();
    const [name, setName] = useState('');
    const isEdit = Boolean(id);

    useEffect(() => {
        if (isEdit) {
            const fetchUser = async () => {
                const response = await fetchUserById(id);
                setName(response.data.name);
            };
            fetchUser();
        }
    }, [id, isEdit]);

    const handleSave = async () => {
        if (isEdit) {
            await updateUser(id, { name });
        } else {
            await createUser({ name });
        }
        // history.push('/');
    };

    return (
        <div className={styles.container}>
            <h1>{isEdit ? 'Edit User' : 'Create New User'}</h1>
            <div className={styles.formGroup}>
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className={styles.buttons}>
                <button onClick={handleSave}>Save</button>
                {/* <button onClick={() => history.push('/')}>Cancel</button> */}
            </div>
        </div>
    );
};

export default UserForm;