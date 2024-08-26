import "./bright.css";
export default function Dark(){
       // script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');

    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    toggleButton.classList.toggle('dark-mode', currentTheme === 'dark');

    toggleButton.addEventListener('click', () => {
        // Toggle dark/light mode
        document.body.classList.toggle('dark-mode');
        toggleButton.classList.toggle('dark-mode');
        
        // Save the user preference
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});
    return<>
        <body>
                <div className="container">
                    <h id="name"></h>
                <button id="theme-toggle">Dark/Light</button>
                </div>
       </body>
       </>
}