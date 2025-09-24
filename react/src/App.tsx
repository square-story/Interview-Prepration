
import "./App.css"
import ReRender from "./components/ReRender"

// type IUser = {
//   id: number;
//   name: string;
//   username: string;
// }


const App = () => {
  // const { data, error, loading } = useFetch<IFetchUser[]>('https://my.api.mockaroo.com/users', { method: "GET", headers: { 'X-API-Key': "c1c53eb0" } })
  // if (loading) return <p>Loading....</p>
  // if (error) return <p style={{ color: 'red' }}>{error}</p>

  // console.log(data)
  return (
    <>
      {/* <EffectAndLayoutEffect />
      <ReverseAString />
      <CounterUsingReducer />
      <ToggleExample />
      <PreventContext />
      <TurnCounter />
      <ul>
        {data?.map((user: IFetchUser) => (
          <li key={user.id}>{user.first_name}</li>
        ))}
      </ul> */}
      <ReRender />
      {/* <SignInComponentUsinguseRef /> */}
    </>
  )
}

export default App