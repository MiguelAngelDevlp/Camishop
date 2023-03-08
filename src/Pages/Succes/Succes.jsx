import { useContext, useEffect, useState } from "react"
import iconList from '../../Assets/check.png'
import { CartContext } from "../../Context/Context"
import './Succes.css'
// import Button from '../../components/Button/Button'
import { Link } from "react-router-dom"
// import SuccesFin from "../../Components/SuccesFin/SuccesFin"





const Succes = ({ tipo }) => {
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

    const totalShop = (tipo) => {
        // console.log(tipo);
        let price = 0
        let send = 0
        console.log(shipping);
        console.log(tipo);
      
        cart.map(coffe => {
          price += (coffe.price * coffe.quantity)
          send += (coffe.price * coffe.quantity)
        })
      
        // console.log(send);
      
        if (tipo !== 'GRATIS') {
          send += 9
          setShipping(send)
        } else {
          setShipping(price)
        }
      


        return (

            <div id="caja-subtotal">

                <div className="caja-envio">
                    <p>SUBTOTAL </p>
                    <span>{price.toFixed(2)} €</span>
                </div>

                <div className="caja-envio">
                    <p>ENVIO </p>
                    <span>{shipping-price},00€</span>
                </div>

                <div id='total-id'>
                    <h6>TOTAL </h6>
                    <span>{send.toFixed(2)} €</span>
                </div>


            </div>



        )

    }




    return (
        <div id='conte'>
            <div id='page-fin'>
                <br />
                <br />
                <br />
                <br />
                <div id="ultimo">

                    <div className='picFin'>
                        <img src={iconList} alt="List Icon" />
                    </div>

                    <div id='fin-text'>
                        <h3>El pedido se ha realizado con éxito</h3>
                        <p>El pedido #{randomNumber} se encuentra en preparación.<br />
                            Lo recibirás dentro de las fechas acordadas en tu envío.<br />
                            Hemos enviado un ticket a tu correo electrónico.</p>
                    </div>

                </div>

                <div id='section-fin'>
                    <h5>Tu pedido</h5>
                    {carrito}
                    {/* <SuccesFin tipo={tipo}/> */}
                    {totalShop()}

                </div>




            </div >
            <div id="volver">
                <Link to={'/'} onClick={handleClick}> <button>Volver al inicio</button>  </Link>

            </div>

        </div>
    )
}

export default Succes