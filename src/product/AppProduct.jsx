import './AppProduct.css'
import Card from './Card';
import DetailsButton from './Button';
import bgIphone from '../assets/products/phone_white.jpg'
import bgIphone2 from '../assets/products/phone_black.jpg'
import bgIphone3 from '../assets/products/phone_flaminggo.jpg'

function AppProduct() {
    const products = [
        {
            title: "Innovation",
            description: "Beautiful and durable, by design",
            image: bgIphone,
            button: <DetailsButton/>
        },
        {
            title: "Cutting-Edge Cameras",
            description: "Picture your best photos and videos",
            image: bgIphone2,
            button: <DetailsButton/>
        },
        {
            title: "Chip and Battery Life",
            description: "Fast that lasts",
            image: bgIphone3,
            button: <DetailsButton/>
        },
    ]

    return (
        <>
        <div className='products-container'>
            {products.map((product, index) => (
                    <Card
                        key={index}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        button={product.button}
                    />
            ))}
        </div>
        </>
    );
}

export default AppProduct;