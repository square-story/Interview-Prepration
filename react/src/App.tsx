
import "./App.css"
import CounterUsingReducer from "./components/CounterUsingReducer"
import EffectAndLayoutEffect from "./components/EffectAndLayoutEffect"
import { PreventContext } from "./components/PreventContext"
import ReverseAString from "./components/ReverseAString"
import SignInComponentUsinguseRef from "./components/SignInComponentUsinguseRef"
import ToggleExample from "./components/ToggleExample"
import { TurnCounter } from "./components/TurnCounter"
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
      <ReverseAString />
      <CounterUsingReducer />
      <ToggleExample />
      <PreventContext />
      <TurnCounter />
      <ul>
        {data?.map((user: IFetchUser) => (
          <li key={user.id}>{user.first_name}</li>
        ))}
      </ul>
      <SignInComponentUsinguseRef />
    </>
  )
}

export default App