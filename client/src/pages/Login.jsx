import React, { useState } from 'react';

const Login = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', formData.email);
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
            </div>
        </div>
    )
}

export default Login;