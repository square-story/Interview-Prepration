import { useTheme } from '../hooks/useTheme.ts';

function Navbar() {
    const { theme, changeTheme } = useTheme();

    return (
        <nav>
            <button onClick={changeTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
        </nav>
    );
}

export default Navbar;