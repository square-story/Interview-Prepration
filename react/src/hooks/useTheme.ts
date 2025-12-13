import React from "react"
import { ThemeContext } from "../context/ThemeContext"

export function useTheme() {
    const themeContext = React.useContext(ThemeContext)

    if (!themeContext) {
        new Error("useTheme must be used within a ThemeProvider")
    }

    return themeContext
}
