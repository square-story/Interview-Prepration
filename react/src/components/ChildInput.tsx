import { forwardRef, type Ref } from "react"

type ChildInputProps = object;

const ChildInput = forwardRef<HTMLInputElement, ChildInputProps>((props, ref: Ref<HTMLInputElement>) => {
    return (
        <>
            <input type="text" ref={ref} placeholder="something" />
        </>
    )
})

export default ChildInput