import reactLogo from './assets/react.svg'

function BrokenComponent() {
    const message = "Hello World"

    return (
        <div>
            <h1>Welcome</h1>
            <p>Message: {message}</p>
            <img src={reactLogo} alt="logo" />
            <div className='container'>
                <span>Item 1</span>
                <span>Item 2</span>
            </div>
        </div>
    )
}

export default BrokenComponent