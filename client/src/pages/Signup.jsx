import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
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
        <div className='flex justify-center items-center bg-electric-blue border-thick'>
            <div className="w-full md:w-[40%] text-black flex-col-1 widget-padding">
                <div className="text-center flex-col-05">
                    <p className='font-primary'>EmojiEpxress</p>
                    <h1 className='text-center'>Signup</h1>
                </div>
                <form onSubmit={handleSubmit} className='flex-col-1 items-center'>
                    <div className='w-full'>
                        <label htmlFor="email" className="block label-text-3">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border-regular bg-white"
                            required
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="password" className="block label-text-3">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border-regular bg-white"
                            required
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="confirmPassword" className="block label-text-3">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border-regular bg-white"
                            required
                        />
                    </div>
                    <div className="py-[2rem]">
                        <button type="submit" className="btn green mt-[24rem] w-full">
                            Signup
                        </button>
                    </div>
                </form>
                <div className='text-[0.875rem] font-[300] text-center pt-[1rem] flex-col-03'>
                    <span>Already have an account?</span>
                    <Link to='/login' className='text-red-600 underline underline-offset-2'>Click here to login</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
