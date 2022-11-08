import { createContext, useState } from "react";

export const themes = {
    dark: {
        backgroundColor: 'gray',
        color: 'white'
    },
    light: {
        backgroundColor: 'white',
        color: 'gray'
    }
};

const ThemeContext = createContext({...themes.dark});

export default ThemeContext;

export const ThemeContextProvider = function ({children}) {
    const [theme, setTheme] = useState(themes.dark);

    return (
        <ThemeContext.Provider value={{...theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}