import './MenuItem.css'

function MenuItem({
    name = "Menu Item",
    description = "",
    price = 0,
    category = "general",
    isVegetarian = false,
    isSpicy = false,
    image = '/default-food.jpg',
    onOrder = function(){}
}) {
    return (
        <div className="main-menu">
            <div className="text-menu">
                <div className="text food-name">
                    {name} 
                    {isSpicy && <span style={{color: 'red', fontSize: '18px'}}>🌶️</span>}
                    {isVegetarian && <span style={{color: 'green', fontSize: '18px'}}>🌱</span>}    
                </div>
                <div className="text food-description">{description}</div>
                <div className="text">RM {price.toFixed(2)}</div>
                <div className="text">{category}</div>
                <button 
                    className="order-btn" 
                    onClick={() => onOrder(name, price)}
                >
                    Add to Order
                </button>
            </div>
            <div>
                <img src={image} alt="" className="test-img"/>
            </div>
        </div>
    )
}

export default MenuItem;