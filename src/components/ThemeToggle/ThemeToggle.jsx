import { useEffect, useState } from "react";
import './ThemeToggle.css';


const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div onClick={toggleTheme} className="theme-toggle">
            <span className="icon sun"><i class="ri-sun-line"></i></span>
            <span className="icon moon"><i class="ri-moon-line"></i></span>
        </div>
    );
}

export default ThemeToggle;
