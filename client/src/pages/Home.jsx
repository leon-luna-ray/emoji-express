import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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
                <h1 className='py-[1rem]'>Today I feel {faceEmojis[currentIndex]}</h1>
                <h2>Welcome to Emoji Express!</h2>
                <p>Embark on a journey of self-discovery and emotional well-being with our unique mood tracking app. 🚀 Whether you're feeling ecstatic, calm, or somewhere in between, Emoji Express lets you effortlessly capture your emotions with just a tap of an emoji. 🎉</p>
                <div className="flex gap-x-[2rem] justify-center pt-[2rem]">
                    <Link to='/login'>
                        <div className="btn red min-w-[6rem]">
                            Login
                        </div>
                    </Link>
                    <Link to='/signup'>
                        <div className="btn red min-w-[6rem]">
                            Signup
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage;