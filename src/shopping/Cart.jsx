import { useState } from "react";
import CartItem from "./Item";

function Cart() {
  const [items, setItems] = useState([
    {
      storeName: "Wear Saka Store",
      isVerified: true,
      itemName: "Wear Saka Long Jeans",
      itemImage:
        "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
      price: 100,
      quantity: 1,
    },
    {
      storeName: "Wear Saka Store",
      isVerified: true,
      itemName: "Wear Saka T-shirt",
      itemImage:
        "https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg",
      price: 20,
      quantity: 3,
    },
    {
      storeName: "Kedai Ah Hiong",
      isVerified: false,
      itemName: "Wear Saka Long Pants",
      itemImage:
        "https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg",
      price: 10,
      quantity: 4,
    },
  ]);

  const storeNames = [];
  items.map((item) => {
    if (storeNames.indexOf(item.storeName) === -1) {
      storeNames.push(item.storeName);
    }
  });

  const getStoreVerification = (storeName) => {
    const storeItem = items.find((item) => item.storeName === storeName);
    return storeItem ? storeItem.isVerified : false;
  };

  const handleQuantityChange = (itemName, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.itemName === itemName ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalAmount = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      {storeNames.map((storeName) => (
        <div key={storeName}>
          {/* Store Header */}
          <div className="store-header">
            <h2>
              {storeName}

              {getStoreVerification(storeName) ? (
                <span style={{ color: "green" }}>✓</span>
              ) : (
                <span></span>
              )}
            </h2>
          </div>

          {items
            .filter((item) => item.storeName === storeName)
            .map((item) => (
              <CartItem
                key={item.itemName} // Add a unique key
                {...item}
                onQuantityChange={handleQuantityChange}
              />
            ))}
        </div>
      ))}
      <div>
        <h2>Total: RM{getTotalAmount().toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default Cart;
