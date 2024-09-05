import { useState } from "react";

const themes = ['light','dark'];

const ThemeContext = React.createContext(themes[0]);

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(themes[0]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return React.useContext(ThemeContext);
}

export default ThemeContextProvider;