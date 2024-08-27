import React, { useEffect, useState } from 'react';
import "./bright.css";

export default function Dark() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check for saved user preference on component mount
        const currentTheme = localStorage.getItem('theme') || 'light';
        setIsDarkMode(currentTheme === 'dark');
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    }, []);

    const handleToggle = () => {
        // Toggle dark/light mode
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.body.classList.toggle('dark-mode', newMode);
        
        // Save the user preference
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };

    return (
        <div className="container">
            <h1 id="name"></h1>
            <button id="theme-toggle" onClick={handleToggle}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
}
