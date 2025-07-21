import Card from './Card';
import DetailsButton from './Button';
import bgIphone from '../assets/products/phone_white.jpg'

function AppProduct() {
    return (
        <>
            <Card
                title="Innovation"
                description="Beautiful and durable, by design"
                image={bgIphone}
                button={<DetailsButton/>}
            />
        </>
    );
}

export default AppProduct;