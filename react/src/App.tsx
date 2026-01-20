import "./App.css"
import Navbar from "./components/NavBar"
import ErrorBoundary from "./class/ErrorBoundary"
import BuggyComp from "./components/BuggyComp"


// type IUser = {
//   id: number;
//   name: string;
//   username: string;
// }


const App = () => {

  return (
    <main className="App">
      <Navbar />
      <ErrorBoundary>
        <BuggyComp />
      </ErrorBoundary>
    </main>
  )
}

export default App