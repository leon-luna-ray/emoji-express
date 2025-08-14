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
        <div className="py-[3rem] md:py-[6rem] flex items-center bg-yellow-400 text-black">
            <div className="container flex-col-1 text-center w-[70%] justify-center">
                <h1 className='py-[1rem] h1'>Today I feel {faceEmojis[currentIndex]}</h1>
                <h2 className='font-primary font-light'>Welcome to Emoji Express!</h2>
                <p>Embark on a journey of self-discovery and emotional well-being with our unique mood tracking app. 🚀 Whether you're feeling ecstatic, calm, or somewhere in between, Emoji Express lets you effortlessly capture your emotions with just a tap of an emoji. 🎉</p>
                <div className="flex gap-x-[2rem] justify-center pt-[2rem]">
                    {isLoggedIn ?
                        <Link to='/dashboard'>
                            <span className="btn red min-w-[6rem]">Go To Dashboard</span>
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