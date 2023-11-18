import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../lib/api';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { logIn } = useAuth();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await loginUser(formData);
            const { token } = response.data;

            localStorage.setItem('token', token);
            logIn();

            navigate('/dashboard');
        } catch (error) {
            alert(error.response?.data?.error || 'Login failed');
        }
    };

    return (
        <div className='flex justify-center items-center md:pt-[6rem]'>
            <div className="w-full md:w-max bg-yellow-400 text-black md:min-w-[30rem] flex-col-1 p-[4rem] md:rounded-md">
                <h1 className='text-center'>Login</h1>
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
                    <button type="submit" className="btn red mt-[2rem] w-full md:w-[6rem]">
                        Login
                    </button>
                </form>
                <div className='text-[0.875rem] font-[300] text-center pt-[1rem] flex-col-03'>
                    <span>Don't have an account?</span>
                    <Link to='/signup' className='text-red-600 underline underline-offset-2'>Click here to sign up!</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;