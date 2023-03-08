import { useContext } from "react";
import { CartContext } from "../../Context/Context";


const Button = ({ shirt, quantity, selectedSize }) => {

    const { cart, setCart, cambio } = useContext(CartContext)

    const addItem = (addShirt, quantity, size) => {
        const noDuplicate = cart.some(e => e.id === addShirt.id && e.size === size);

        if (noDuplicate) {
            cart.map((product) => {
                if (addShirt.id === product.id && product.size === size) {
                    return product.quantity += quantity;
                }
            });
        } else {
            addShirt.quantity = quantity;
            addShirt.size = size;
            setCart(prev => [...prev, addShirt]);
        }
        cambio();
    };

    return (
        <button className='boton' type='button' onClick={() => addItem(shirt, quantity, selectedSize)}>AÑADIR</button>
    )
}

export default Button;