
import "./App.css"
import EffectAndLayoutEffect from "./components/EffectAndLayoutEffect"
import Search from "./components/Search"
import ToggleExample from "./components/ToggleExample"
import { useFetch } from "./hooks/useFetch"
import type { IFetchUser } from "./hooks/useFetchUser"

// type IUser = {
//   id: number;
//   name: string;
//   username: string;
// }


const App = () => {
  const { data, error, loading } = useFetch<IFetchUser[]>('https://my.api.mockaroo.com/users', { method: "GET", headers: { 'X-API-Key': "c1c53eb0" } })

  if (loading) return <p>Loading....</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  console.log(data)
  return (
    <>
      <EffectAndLayoutEffect />
      <Search />
      <ToggleExample />
      <ul>
        {data?.map((user: IFetchUser) => (
          <li key={user.id}>{user.first_name}</li>
        ))}
      </ul>
    </>
  )
}

export default App