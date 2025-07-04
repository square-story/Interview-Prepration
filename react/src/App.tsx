
import "./App.css"
import EffectAndLayoutEffect from "./components/EffectAndLayoutEffect"
import Search from "./components/Search"
import ToggleExample from "./components/ToggleExample"
import { useFetchUser } from "./hooks/useFetchUser"



const App = () => {

  const { value } = useFetchUser()

  return (
    <>
      <EffectAndLayoutEffect />
      <Search />
      <ToggleExample />
      {value.map((item, index) => (
        <p key={index}>{item.first_name}</p>
      ))}
    </>
  )
}

export default App