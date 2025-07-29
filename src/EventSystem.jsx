function CustomButton() {
    const handleClick = (event) => {
        console.log('Synthethic Event', event);
        console.log('Native Event', event.nativeEvent);
        console.log('Event type', event.type);
        console.log('Target element', event.target);
    }
    return (
        <button onClick={handleClick}>Custom Button</button>
    )
}

export default CustomButton