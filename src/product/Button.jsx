import './Button.css'

function AddCart() {
    const handleClick = () => {
        console.log('Add to cart');
    };

    return (
        <div className="details-button" onClick={handleClick}>
            <span className="details-icon">
                <svg width="25" height="25" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 10 L40 40 L10 40 L10 60 L40 60 L40 90 L60 90 L60 60 L90 60 L90 40 L60 40 L60 10 Z"
                        fill="#ffffff"
                        stroke="none" />
                </svg>
            </span>
        </div>
    );
}

export default AddCart;