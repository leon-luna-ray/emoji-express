import React, { useState, useEffect } from 'react';

const HomePage = () => {
    const faceEmojis = [
        '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣',
        '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰',
        '😋', '😎', '🤩', '😏', '😒', '😞', '😔', '😟',
        '😕', '🙁', '☹️', '😢', '😭', '😤', '😠', '😡',
        '🤯', '😳', '😱', '😨', '😰', '😥', '😓', '🤔',
        '🤗', '🤭', '🥳', '🥺', '🤤', '🤢', '🤮', '🤫',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const updateIndex = () => {
            const randomIndex = Math.floor(Math.random() * faceEmojis.length);
            setCurrentIndex(randomIndex);
        };
        const intervalId = setInterval(updateIndex, 1000); // Change interval to 1000 milliseconds (1 second)
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="h-[500px] flex items-center bg-yellow-400 text-black">
            <div className="container flex-col-1 text-center w-[70%] justify-center">
                <h1 className='py-[1rem]'>Today I feel {faceEmojis[currentIndex]}</h1>
                <h2>Welcome to Emoji Express!</h2>
                <p>Embark on a journey of self-discovery and emotional well-being with our unique mood tracking app. 🚀 Whether you're feeling ecstatic, calm, or somewhere in between, Emoji Express lets you effortlessly capture your emotions with just a tap of an emoji. 🎉</p>
            </div>
        </div>
    )
}

export default HomePage;