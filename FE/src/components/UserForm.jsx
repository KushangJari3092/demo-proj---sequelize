import React, { useContext, useState } from 'react'
import { addUser } from '../apis/addUser';
import { toast } from 'react-toastify';

import '../App.css'
import { Context } from '../context/context';
import { getUsers } from '../apis/getUsers';

export default function UserForm() {


    const { setBackendError, isAddUser, setIsShowUsers, setIsAddUser, setIsModalOpen } = useContext(Context)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
    });

    const validate = () => {
        let valid = true;
        let errors = {};

        // name validation: should not be empty and should be at least 3 characters long
        if (!formData.name) {
            errors.name = 'name is required';
            valid = false;
        }

        // Email validation: simple regex to check email format
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!formData.email) {
            errors.email = 'Email is required';
            valid = false;
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };
    // const notify = msg => toast(msg);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const res = await addUser(formData)
                console.log('res-- :>> ', res);
                if (res?.err) {
                    setBackendError(res?.err)
                    setIsModalOpen(true)
                } if (res?.success) {
                    console.log('res?.success :>> ', res?.success);
                    toast.success(res?.success);
                }
            } catch (err) {
                console.log('err :>> ', err);
            }
        }
    };


    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form-title">Create User</h2>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        // type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <button type="submit" className="form-button" >Sign Up</button>
            </form>
            <button className="see-button" onClick={() => { setIsAddUser(false); setIsShowUsers(true); }}>Show Users</button>
        </div>
    )
}
