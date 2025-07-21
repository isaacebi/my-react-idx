import './Styling.css'

function Styling() {
    const localButtonStyle = {
        backgroundColor: "#007bff",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px"
    }

    return (
        <>
            <button style={localButtonStyle}>
                Click Me - Local Style
            </button>

            <br />
            <br />

            <button className="primary-button">
                Click Me - From CSS
            </button>
        </>
    )
}

export default Styling