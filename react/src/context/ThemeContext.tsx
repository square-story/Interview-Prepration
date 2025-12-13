import { createContext } from 'react'

export type Theme = "light" | "dark"

type IThemeContext = {
    theme: Theme;
    changeTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
    theme: "light",
    changeTheme: () => { }
})
