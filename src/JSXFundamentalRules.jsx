import viteLogo from '/vite.svg'

function FundamentalRules() {
    function handleClick() {
        console.log('Button clicked')
    }

    return (
        <> {/* React Fragment */} 
            <h1>Title</h1>
            <p>Description</p>

            {/* Self-Closing Tags */}
            <img src={viteLogo} alt="Vite Logo" />
            <br />
            <input type="text" />

            {/* Camel Case Attribute */}
            <div className='container' onClick={handleClick}>
                Click Me Text
            </div>
        </>
    )
}

export default FundamentalRules