
import { useDispatch } from "react-redux"
import "./App.css"
import Navbar from "./components/NavBar"
import { type AppDispatch } from "./store"
import { decrement, increment, reset } from "./features/countSlice"


// type IUser = {
//   id: number;
//   name: string;
//   username: string;
// }


const App = () => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <main className="App">
      <Navbar />
      <h1>Welcome to Themed Application</h1>
      <p>This application allows you to switch between light and dark themes.</p>
      <p>Click the button in the navbar to toggle the theme.</p>
      <button onClick={() => dispatch(increment())}>
        + Increment Counter
      </button>
      <button onClick={() => dispatch(decrement())}>
        - Decrement Counter
      </button>
      <button onClick={() => dispatch(reset())}>
        Reset Counter
      </button>
    </main>
  )
}

export default App