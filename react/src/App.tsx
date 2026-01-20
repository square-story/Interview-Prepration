import "./App.css"
import Navbar from "./components/NavBar"
import ScrollTrigger from "./components/ScrollTrigger"


// type IUser = {
//   id: number;
//   name: string;
//   username: string;
// }


const App = () => {

  return (
    <main className="App">
      <Navbar />
      <ScrollTrigger />
    </main>
  )
}

export default App