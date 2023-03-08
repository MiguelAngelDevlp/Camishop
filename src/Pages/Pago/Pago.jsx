import { useContext, useEffect, useState } from "react"
import BoxPrice from "../../Components/BoxPrice/BoxPrice"
import Checkout from "../../Components/Checkout/Checkout"
import PaymentMethod from "../../Components/PaymentMethod/PaymentMethod"
import { CartContext } from "../../Context/Context"


const Pago = () => {

    const [nueve, setNueve] = useState('')
    const {cart, setCart} = useContext(CartContext)
    const { shipping, setShipping } = useContext(CartContext)


    useEffect(() => {
        let price = 0
        cart.map((coffee) =>{
            price += (coffee.price * coffee.quantity)
        })
        if (price === shipping) {
            setNueve('GRATIS')
        } else {
            setNueve('9,00 €')
        }


    }, [])


    return (
        <div>
            <PaymentMethod/>
            <Checkout/>
            console.log(tipo);
            <BoxPrice tipo={nueve} text='Pagar y realizar pedido' page={'Pago'}/>
        </div>
    )
}

export default Pago



