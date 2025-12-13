
import "./App.css"
import Navbar from "./components/NavBar"


// type IUser = {
//   id: number;
//   name: string;
//   username: string;
// }


const App = () => {
  return (
    <main className="App">
      <Navbar />
      <h1>Welcome to Themed Application</h1>
      <p>This application allows you to switch between light and dark themes.</p>
      <p>Click the button in the navbar to toggle the theme.</p>
    </main>
  )
}

export default App