
import "./App.css"
import EffectAndLayoutEffect from "./components/EffectAndLayoutEffect"
import Search from "./components/Search"
import ToggleExample from "./components/ToggleExample"
import { useFetch } from "./hooks/useFetch"

type IUser = {
  id: number;
  name: string;
  username: string;
}


const App = () => {
  const { data, error, loading } = useFetch<IUser[]>('https://jsonplaceholder.typicode.com/users')

  if (loading) return <p>Loading....</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  console.log(data)
  return (
    <>
      <EffectAndLayoutEffect />
      <Search />
      <ToggleExample />
      <ul>
        {data?.map((user: IUser) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App