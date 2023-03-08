import { useContext, useEffect, useState } from "react"
import BoxPrice from "../../Components/BoxPrice/BoxPrice"
import { CartContext } from "../../Context/Context"
import './Cesta.css'


const Cesta = () => {

    const { cart, setCart } = useContext(CartContext)
    const { choose, setChoose } = useContext(CartContext)
    const [carrito, setCarrito] = useState([])
    const [radio, setRadio] = useState('GRATIS')

    
    const radioControl = (price) => {
        setRadio(price.target.value)

    }

    
    const deleteCoffee = (id) => {
        const newCart = [...cart]
        newCart.forEach((coffee) => {
            if (coffee._id === id) {
                newCart.splice(newCart.indexOf(coffee), 1)
            }
        })
        setCart(newCart)
        setChoose(!choose)
    }
      
      useEffect(() => {
        const cartBox = cart.map((coffee) => {
          return (
            <div id="ca1" key={coffee.id}>
              <div id="col">
                {/* <div id="chil1">
                  <button onClick={() => addCoffee(coffee._id)}>-</button> <p>{coffee.quantity}</p><button onClick={() => lessCoffee(coffee._id)}>+</button>
                </div> */}
      
                <div id="chil2">
                  <img src={coffee.img} alt={coffee.team_name} />
                </div>
      
                <div id="chil3">
                  <h5 id="team">{coffee.team_name}</h5>
                  <p id="precio">{coffee.price},00€</p>
                </div>
      
              </div>
              <div id="chil4">
                <p>C/U:    {coffee.price},00€</p>
              </div>
            </div>
          )
        })
        setCarrito(cartBox)
      }, [choose])
      


    return (

        <div id="cesta-sect">
            <h3>Cesta</h3>

            {carrito}

            <div id="radioBox" onChange={radioControl}>
                <h4>Seleccionar envío</h4>

                <div className="contRadio">
                    <div className="tog">
                        <input type="radio" value='GRATIS' name="shipping" defaultChecked />
                        <div className="flex">
                            <label>Envío 10-15 días </label>
                            <p> Opción estándar sin seguimiento </p>
                        </div>

                    </div>
                    <span>GRATIS</span>
                </div>

                <div className="contRadio">
                    <div className="tog">
                        <input type="radio" value='9,00€' name="shipping" />
                        <div className="flex">

                        <label>Envío urgente 48h </label>
                        <p> Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).</p>
                        </div>
                    </div>
                    <span>9,00 €</span>
                </div>

                <BoxPrice tipo={radio} className={'btnPrice'} text='Ir al checkout' doblete='Seguir comprando' page={'Cesta'} />
            </div>
        </div>
    )
}

export default Cesta