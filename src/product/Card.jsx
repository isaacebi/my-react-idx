import './Card.css'

function Card({ 
    title = "Unknown Product", 
    description = "Unknown Product", 
    image = "https://placehold.co/600x400", 
    price = 0, 
    button = <button>Add to Cart</button>
}) {
    return (
        <div className="body-container">
            <img src={image} alt="" className="bg-img"/>
            <div className="text-container">
                <p>{title}</p>
                <h2>{description}</h2>
            </div>
                {button}
        </div>
    );
}

export default Card;