import useToggle from "../hooks/useToggle"


const ToggleExample = () => {

    const { toggle, toggleOff, toggleOn, customState } = useToggle({})
    return (
        <>
            <button onClick={toggle}>{customState ? "ToHide" : "ToShow"}</button>
            <button onClick={toggleOff}>Off</button>
            <button onClick={toggleOn}>On</button>
            {customState && (
                <p>
                    Click to ToHide button to hide this text
                </p>
            )}
        </>
    )
}

export default ToggleExample