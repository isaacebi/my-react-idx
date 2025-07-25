import { useState } from "react";
import pantLong from "../assets/products/pant_long.jpg";
import "./Item.css";

function CartItem({
  storeName = "Wear Saka Store",
  isVerified = true,
  itemName = "Wear Saka Long Pants",
  itemImage = pantLong,
  price = 100,
  quantity = 1,
  removeFromCard = function () {},
  onQuantityChange = function () {},
}) {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setCurrentQuantity(newQuantity);
    }
  };

  return (
    <div>
      <div>
        {/* Product Item */}
        <div className="product-item">
          {/* Product Image - Left Side */}
          <div className="product-left-side">
            <img src={itemImage} alt="Product Image" className="product-image" />
          </div>

          {/* Product Details - Middle Side */}
          <div className="product-middle-side">
            <h3 className="item-name">{itemName}</h3>
            <p className="item-price">RM {price.toFixed(2)}</p>
          </div>

          {/* Product Action Right Side*/}
          <div className="product-right-side">
            <button onClick={() => handleQuantityChange(currentQuantity - 1)}>
              -
            </button>
            <span>{currentQuantity}</span>
            <button onClick={() => handleQuantityChange(currentQuantity + 1)}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
