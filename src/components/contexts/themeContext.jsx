import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system')

    const applyTheme = (theme) => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');

        if (theme === 'system') {
            const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            root.classList.add(isDarkMode ? 'dark' : 'light');
        } else {
            root.classList.add(theme);
        }
    }

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}