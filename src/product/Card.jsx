import './Card.css'

function Card({ title, description, image, price, button }) {
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