function RestaurantHeader({
    restaurantName = "Our Restaurant",
    tagline = "Delicious food for everyone",
    rating = 0,
    cuisine = "International",
}) {
    const renderStars = (rating) => {
        return "★".repeat(rating) + "☆".repeat(5 - rating);
    }
    return (
        <header className="restaurant-header">
            <div className="restaurant-info">
                <h1 className="restaurant-name">{restaurantName}</h1>
                <p className="tagline">{tagline}</p>
                <div className="restaurant-details">
                    <div className="rating">
                        <span className="stars">{renderStars(rating)}</span>
                        <span className="rating-number">({rating}/5)</span>
                    </div>
                    <div className="cuisine">
                        <span className="cuisine-type">{cuisine}</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default RestaurantHeader