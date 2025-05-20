import React, { createContext, useState, useContext } from 'react';

// Define theme options as an object with color values
const themeOptions = {
    green: {
        text: 'text-green-400',
        bg: 'bg-green-400',
        border: 'border-green-400',
        hover: 'hover:bg-green-400 hover:text-green-400 font-semibold',
        focus:"focus:border-green-400"
    },
    darkYellow: {
        text: 'text-yellow-600',
        bg: 'bg-yellow-600',
        border: 'border-yellow-600',
        hover: 'hover:bg-yellow-600 hover:text-yellow-600 font-semibold',
        focus:"focus:border-yellow-600"
    },
    orange: {
        text: 'text-orange-500',
        bg: 'bg-orange-500',
        border: 'border-orange-500',
        hover: 'hover:bg-orange-500 hover:text-orange-500 font-semibold',
        focus:"focus:border-orange-500"
    },
    sky: {
        text: 'text-sky-400',
        bg: 'bg-sky-400',
        border: 'border-sky-400',
        hover: 'hover:bg-sky-400 hover:text-sky-400 font-semibold',
        focus:"focus:border-sky-400"
    },
    gray: {
        text: 'text-gray-400',
        bg: 'bg-gray-400',
        border: 'border-gray-400',
        hover: 'hover:bg-gray-400 hover:text-gray-400 font-semibold',
        focus:"focus:border-gray-400"
    },
    blue: {
        text: 'text-blue-600',
        bg: 'bg-blue-600',
        border: 'border-blue-600',
        hover: 'hover:bg-blue-600 hover:text-blue-600 font-semibold',
        focus:"focus:border-blue-600"
    },
    red: {
        text: 'text-red-500',
        bg: 'bg-red-500',
        border: 'border-red-500',
        hover: 'hover:bg-red-500 hover:text-red-500 font-semibold',
        focus:"focus:border-red-500"
    },
    pink: {
        text: 'text-pink-500',
        bg: 'bg-pink-500',
        border: 'border-pink-500',
        hover: 'hover:bg-pink-500 hover:text-pink-500 font-semibold',
        focus:"focus:border-pink-500"
    },
    violet: {
        text: 'text-violet-500',
        bg: 'bg-violet-500',
        border: 'border-violet-500',
        hover: 'hover:bg-violet-500 hover:text-violet-500 font-semibold',
        focus:"focus:border-violet-500"
    }
};

// Create the context
const ThemeContext = createContext();

// Create a custom hook for easy consumption of the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('green'); // Default theme

    // Get current theme colors
    const themeColors = themeOptions[currentTheme];

    // Function to change the theme
    const changeTheme = (themeName) => {
        if (themeOptions[themeName]) {
            setCurrentTheme(themeName);
        }
    };

    // Value provided by the context
    const value = {
        currentTheme,
        setCurrentTheme,
        themeColors,
        changeTheme,
        allThemes: Object.keys(themeOptions)
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
