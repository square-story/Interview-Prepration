import { useEffect, useRef, useState } from "react"
import "./App.css"
import ChildInput from "./components/ChildInput"
import { Todo } from "./pages/Todo"


const App = () => {
  const [timer, setTimer] = useState(0)
  const [isPaused, setIsPaused] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    let timerFun: number;
    if (!isPaused) {
      timerFun = setInterval(() => {
        setTimer(prev => prev + 1)
      }, 1000);
    }
    return () => clearInterval(timerFun)
  }, [isPaused])
  const pause = () => setIsPaused(true)
  const start = () => setIsPaused(false)
  const restart = () => {
    setIsPaused(true)
    setTimer(0)
  }

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.value = "something new"
    }
  }
  return (
    <>
      <p>{timer}</p>
      <button onClick={start}>start</button>
      <button onClick={pause}>pause</button>
      <button onClick={restart}>restart</button>
      <ChildInput ref={inputRef} />
      <button onClick={focusInput}>OnFocus</button>
      <Todo />
    </>
  )
}

export default App