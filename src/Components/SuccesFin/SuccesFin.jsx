import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../Context/Context"

const SuccesFin = ({tipo}) =>{


    const { cart, setCart } = useContext(CartContext)
    const { choose, setChoose } = useContext(CartContext)
    const [carrito, setCarrito] = useState([])
    const { shipping, setShipping } = useContext(CartContext)
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 1001001));
    
    useEffect(() => {
        const cartBox = cart.map((coffee) => {
            return (
                <div id="section-payed" key={coffee.id}>
                    <div id="col">

                        <div id="chil2">
                            <img src={coffee.img} alt={coffee.team_name} />
                        </div>

                        <div id="chil3">
                            <h5>{coffee.team_name}</h5>
                            <p>{coffee.price},00€</p>
                        </div>

                    </div>
                    <div id="chil4">
                        <p className="bolder">{coffee.quantity * coffee.price},00 €</p>
                    </div>
                </div>
            )
        })
        setCarrito(cartBox)
    }, [choose])
    
    const handleClick = () => {
        setCart([])
    };
}

export default SuccesFin