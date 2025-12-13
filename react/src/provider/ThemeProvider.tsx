import { useMemo, useState, type PropsWithChildren } from "react";
import type { Theme } from "../context/ThemeContext";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState<Theme>('light');
    const contextValue = useMemo(() => ({
        theme,
        changeTheme: () => setTheme(prev => prev == 'dark' ? 'light' : 'dark')
    }), [theme])
    const themeStyles = {
        light: {
            backgroundColor: '#ffffff',
            color: '#000000',
        },
        dark: {
            backgroundColor: '#222222',
            color: '#ffffff',
        },
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            <div style={themeStyles[theme]}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}