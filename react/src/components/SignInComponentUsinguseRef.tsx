import { useRef } from "react"
import { Input } from "./UI/Input"

const SignInComponentUsinguseRef = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(
            (emailRef.current as HTMLInputElement | null)?.value,
            (passwordRef.current as HTMLInputElement | null)?.value
        )
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>SignIn</h1>
            <Input label="email" ref={emailRef} type="email" name="email" />
            <Input label="password" ref={passwordRef} type="password" name="password" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignInComponentUsinguseRef