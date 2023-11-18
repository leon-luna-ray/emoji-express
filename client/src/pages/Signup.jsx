import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createNewUser } from '../lib/api'

const Signup = () => {
    const navigate = useNavigate();

    // State
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    // Methods
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (formData.password !== formData.confirmPassword) {
                alert('Passwords do not match');
                setFormData({
                    ...formData,
                    password: '',
                    confirmPassword: '',
                });
                return;
            }

            const response = await createNewUser(formData);

            setFormData({
                email: '',
                password: '',
                confirmPassword: '',
            });

            alert(response.data.message)
            navigate('/login')
        } catch (error) {
            alert(error.response?.data?.error);
        }
    };

    return (
        <div className='flex justify-center items-center md:pt-[6rem]'>
            <div className="w-full md:w-max bg-yellow-400 text-black md:min-w-[30rem] flex-col-1 p-[4rem] md:rounded-md">
                <h1 className='text-center'>📋 Sign Up</h1>
                <form onSubmit={handleSubmit} className='flex-col-1 items-center'>
                    <div className='w-full'>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <button type="submit" className="btn red mt-[2rem] w-full md:w-[6rem]">
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
