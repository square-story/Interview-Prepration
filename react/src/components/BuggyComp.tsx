
const BuggyComp = () => {
    throw new Error('Buggy Component Error')
    return (
        <div>BuggyComp</div>
    )
}

export default BuggyComp