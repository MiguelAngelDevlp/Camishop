import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/Context"
import './ShopCart.css'


const ShopCart = () => {
    const { cart, setCart } = useContext(CartContext)
    const { cambio, choose } = useContext(CartContext)
    const [carrito, setCarrito] = useState([])



    const addCoffee = (id) => {
        cart.map((coffee) => {
            if (coffee.id === id) {
                coffee.quantity--
            }
            if (coffee.quantity === 0) {
                cart.splice(cart.indexOf(coffee), 1)
            }
        })
       cambio()
    }




    const calculateTotal = () => {
        let totalQuantity = 0;
        let totalPrecio = 0;

        cart.map((item) => {
            totalQuantity += item.quantity;
            totalPrecio += item.price * item.quantity;
        })

        return { totalQuantity, totalPrecio }
    };




    const lessCoffee = (id) => {
        cart.map((coffee) => {
            if (coffee.id === id) {
                coffee.quantity++
            }
        })
        cambio()
    }

    const deleteCoffee = (id) => {
        cart.map((coffee) => {
            if (coffee.id === id) {
                cart.splice(cart.indexOf(coffee), 1)
            }
        })
        cambio()
    }

    const deleteCart = () => {
        setCart([])
        cambio()
    }





    useEffect(() => {
        const cartBox = cart.map((coffee) => {
            return (
                <div id='style-cesta' key={coffee.id}>

                    <div id="do-columns">


                        <div id="shop-central">
                            <img id="photo" src={coffee.img}  alt={coffee.team_name} />
                            <h4>{coffee.team_name}</h4>
                            <p>{coffee.price},00€</p>
                        </div>


                        <div id="shop-buttons">
                            <button id="menos" onClick={() => addCoffee(coffee.id)}>-</button>
                            <span>{coffee.quantity}</span>
                            <button  id="mas" onClick={() => lessCoffee(coffee.id)}>+</button>
                        </div>
                            <div id="qua">
                                <p>Total: {coffee.quantity * coffee.price}€</p>
                            </div>

                        <button id="btn-remove-all" onClick={() => deleteCoffee(coffee.id)}>X</button>

                    </div>
                </div>
            )
        })
        setCarrito(cartBox)
    }, [choose])


    return (
        <div id="conteiner-cesta" style={{ height: calculateTotal().totalQuantity > 0 ? '275px' : '30px' }}>

            {carrito}

            {calculateTotal().totalQuantity === 0 ? (
                <p id="vacio">La cesta está vacia</p>
            ) : (
                <>
                    <button id='btn-vaciar' onClick={() => deleteCart()}>Vaciar carrito</button>
                    <button id="btn-go-cesta"><Link to={'/Cesta'}> Ir a la cesta</Link></button>
                    <br />
                    <br />
                    <p id="subr">
                        {calculateTotal().totalQuantity} productos, en total {calculateTotal().totalPrecio},00 €</p>
                </>)}

        </div >
    )
}

export default ShopCart