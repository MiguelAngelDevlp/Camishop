

import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/Context"
// import Button from "../Button/Button"

import './BoxPrice.css'


const BoxPrice = ({ tipo, text, page }) => {

    const { cart, setCart } = useContext(CartContext)
    const { shipping, setShipping } = useContext(CartContext)




    const totalShop = () => {
        let price = 0
        let send = 0

        cart.map(coffe => {
            price += (coffe.price * coffe.quantity)
            send += (coffe.price * coffe.quantity)
        })


        let iva = send - (send / 1.21)

        if (tipo !== 'GRATIS') {
            send += 9
            setShipping(send)
        }   else  {
            setShipping(price)
        }


        return (
            <div id="box-precio-total">
                <h5>Total del carrito</h5>
                <div id="caja-subtotal">

                    <div className="caja-envio">
                        <p>SUBTOTAL </p>
                        <span>{price.toFixed(2)} €</span>
                    </div>

                    <div className="caja-envio">
                        <p>ENVIO </p>
                        <span>{tipo} </span>
                    </div>

                    <div id='total-id'>
                        <h6>TOTAL </h6>
                        <span>{send.toFixed(2)} €</span>
                    </div>

                    {/* <p className="iva">Incluye {iva.toFixed(2)}€ de IVA</p> */}
                </div>

                <div id="buttons-total-price">
                    {page === 'Cesta' ? (
                        <div id="botons">
                            <div id="btones">
                                <Link to={'/Pago'}><button className={'btnPrice'} >Ir a Pagar</button></Link>
                            </div>
                            <div id="compra">
                                <Link to={'/Tienda'}><button className={['testimonial']}>Seguir Comprando</button></Link>
                            </div>
                        </div>
                    ) : (
                        <div id="pagar">
                            <Link to={'/Succes'}><button className={['testimonial']} text={text} >Pagar y realizar pedido</button></Link>
                        </div>
                    )}



                </div>

            </div>)

    }








    return (
        <div>
            {totalShop()}


        </div>
    )
}


export default BoxPrice