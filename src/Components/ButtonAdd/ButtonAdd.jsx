
import { useContext } from 'react'
import { CartContext } from '../../Context/Context'
import './ButtonAdd.css'




const ButtonAdd = ({ shirt }) => {

    const { cart, setCart,cambio } = useContext(CartContext)


    const addItem = (addShirt) => {


        const noDuplicate = cart.some(e => e.id === addShirt.id)



        if (noDuplicate) {

            cart.map((product) => {


                if (addShirt.id === product.id) {
                    return product.quantity++
                }
            })

        } else {
            addShirt.quantity = 1
            setCart(prev => [...prev, addShirt])
        }
        cambio()
    }

    


    return (
        <button onClick={() => addItem(shirt)}>AÑADIR</button>
    )
}

export default ButtonAdd