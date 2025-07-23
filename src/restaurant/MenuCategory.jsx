import MenuItem from "./MenuItem";


function MenuCategory({
    categoryName = 'Category',
    items = [],
    onItemOrder = function () { }
}) {
    return (
        <>
            <h2>{categoryName}</h2>

            {/* Check if items array is valid and not empty */}
            {!items || items.length === 0 ? (
                <p>No items available in this category</p>
            ) : (
                <div>
                    {
                        items.map((menu, index) => (
                            <MenuItem
                                key={index}
                                name={menu.name}
                                description={menu.description}
                                price={menu.price}
                                category={menu.category}
                                isVegetarian={menu.isVegetarian}
                                isSpicy={menu.isSpicy}
                                image={menu.image}
                                onOrder={onItemOrder}
                            />
                        ))
                    }
                </div>
            )}

        </>
    )
}

export default MenuCategory