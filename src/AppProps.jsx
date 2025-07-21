import ReceivingProps from "./ReceivingProps";
import Destructuring from "./Destructuring";

function AppProps() {
    return (
        <>
            <h1>Receiving Props</h1>
            <ReceivingProps 
                name="John" 
                email="john@email.com" 
                role="admin"
            />
            <ReceivingProps
                name="Jacky" 
                email="jacky@email.com" 
                role="user"
            />


            <br />
            <h1>Destructuring</h1>
            <Destructuring 
                name="John" 
                email="john@email.com" 
                role="admin"
            />
            <Destructuring 
                name="Jacky" 
                email="jacky@email.com" 
                role="user"
            />
        </>
    )
}

export default AppProps