import "./App.css"
import Search from "./components/Search"
import useCopyToClipboard from "./hooks/useCopyToClipboard"

const App = () => {
  const [isCopied, setIsCopied] = useCopyToClipboard('Text is copy');
  return (
    <>
      <Search />
      <button onClick={setIsCopied}>{isCopied ? "copied" : "copy"}</button>
    </>
  )
}

export default App