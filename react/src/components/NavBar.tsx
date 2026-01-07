import { useSelector } from 'react-redux';
import { useTheme } from '../hooks/useTheme.ts';
import type { RootState } from '../store.ts';

function Navbar() {
    const { theme, changeTheme } = useTheme();
    const { value } = useSelector((state: RootState) => state.counter);

    return (
        <nav>
            <button onClick={changeTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
            <span>Counter Value: {value}</span>
        </nav>
    );
}

export default Navbar;