import RestaurantHeader from "./RestaurantHeader";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

function AppRestaurant() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    function handleOrder(itemName, price) {

        // Display alert with order details
        alert(`Order placed!\nItem: ${itemName}\nPrice: RM ${price.toFixed(2)}`);

        // Log the order to console
        console.log(`Order Details:`, {
            item: itemName,
            price: price,
            timestamp: new Date().toLocaleString()
        });
    }

    // data or get data from api
    const menus = [
        {
            name: "Garlic Shrimp",
            description: "Shrimp with garlic cooked using wine",
            price: 23.90,
            category: "Seafood",
            isVegetarian: false,
            isSpicy: true,
            image: 'https://images.pexels.com/photos/679454/pexels-photo-679454.jpeg',
        },
        {
            name: "Grilled Salmon",
            description: "Fresh Atlantic salmon grilled with lemon and herbs",
            price: 28.90,
            category: "Seafood",
            isVegetarian: false,
            isSpicy: false,
            image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg',
        },
        {
            name: "Chicken",
            description: "Grilled chicken breast marinated with herbs and spices",
            price: 22.50,
            category: "Chicken",
            isVegetarian: false,
            isSpicy: false,
            image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg',
        },
        {
            name: "Herb-Crusted Portobello",
            description: "Grilled portobello mushroom marinated with herbs and spices",
            price: 22.50,
            category: "Vegetarian",
            isVegetarian: true,
            isSpicy: false,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7lfwNIXY1AKchOt3w7AaXfnQ5tyEgtJjEQ&s',
        }
    ]

    // Get unique categories from the menus array
    const categories = ["All", ...new Set(menus.map(menu => menu.category))];
    const uniqueCategories = [...new Set(menus.map(menu => menu.category))];

    return (
        <>
            <RestaurantHeader
                restaurantName="Kampung Seafood"
                tagline="Best seafood in Damansara Jaya"
                rating={4}
                cuisine="Seafood"
            />

            {/* Filter Buttons */}
            <div className="filter-buttons">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={selectedCategory === category ? "active" : ""}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Display filtered menu items */}
            <div>
                {selectedCategory === "All" ? (
                    // When "All" is selected, show each category separately
                    uniqueCategories.map((category, index) => (
                        <MenuCategory
                            key={index}
                            categoryName={category}
                            items={menus.filter(menu => menu.category === category)}
                            onItemOrder={handleOrder}
                        />
                    ))
                ) : (
                    // When specific category is selected, show only that category
                    <MenuCategory
                        categoryName={selectedCategory}
                        items={menus.filter(menu => menu.category === selectedCategory)}
                        onItemOrder={handleOrder}
                    />
                )}
            </div>
        </>
    );
}

export default AppRestaurant;