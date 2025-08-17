import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

const HomePage = () => {
    const faceEmojis = [
        '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣',
        '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰',
        '😋', '😎', '🤩', '😏', '😒', '😞', '😔', '😟',
        '😕', '🙁', '☹️', '😢', '😭', '😤', '😠', '😡',
        '🤯', '😳', '😱', '😨', '😰', '😥', '😓', '🤔',
        '🤗', '🤭', '🥳', '🥺', '🤤', '🤢', '🤮', '🤫',
    ];

    // State
    const { isLoggedIn, logOut } = useAuth();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Lifecycle
    useEffect(() => {
        const updateIndex = () => {
            const randomIndex = Math.floor(Math.random() * faceEmojis.length);
            setCurrentIndex(randomIndex);
        };
        const intervalId = setInterval(updateIndex, 800);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="widget-padding lg:py-[3rem] flex items-center text-black border-black bg-cyan border-[4px]">
            <div className="flex-col-1 text-center justify-center items-center lg:max-w-[70%] lg:mx-auto">
                <div className="flex flex-col gap-y-[0.5rem] text-center">

                    <h1 className='font-primary'>Emoji Express</h1>
                    <div className="label-text-3">Mood Tracking App</div>
                </div>
                <div className="my-[1rem] flex flex-col items-center">

                    <p className='!text-[3rem]'>Today I feel</p>
                    <p className='text-[8rem]'>{faceEmojis[currentIndex]}</p>
                    <p className='lg:w-[50%]'>Embark on a journey of self-discovery and emotional well-being with our unique mood tracking app. Emoji Express lets you capture your mood with just a tap of an emoji. 🎉</p>
                </div>
                <div className="flex gap-x-[2rem] justify-center pt-[2rem]">
                    {isLoggedIn ?
                        <Link to='/dashboard'>
                            <span className="btn green label-text-3">Go To Dashboard</span>
                        </Link> :
                        <>
                            <Link to='/login'>
                                <span className="btn red min-w-[6rem]">Login</span>
                            </Link>
                            <Link to='/signup'>
                                <span className="btn red min-w-[6rem]">Signup</span>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage;