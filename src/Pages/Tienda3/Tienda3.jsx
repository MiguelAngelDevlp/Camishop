import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonAdd from "../../Components/ButtonAdd/ButtonAdd";
// import Prueba from "../../Components/prueba/prueba";
import { CartContext } from "../../Context/Context";
// import './España.css'
import './Tienda3.css'

const Tienda3 = () => {


    const apiURL = 'https://api-camishop.vercel.app'

    const [shirt, setShirt] = useState([])
    const [fetching, setFetching] = useState(true)
    const [items, setItems] = useState(false);
    const {choose, setChoose} = useContext(CartContext)
    const { cart, setCart } = useContext(CartContext)

    useEffect(() => {
        axios
            .get(apiURL)
            .then((response) => {
                const cafeSort = response.data.teams.slice(100,153)
                

                const cafeMain = cafeSort

                setShirt(cafeMain)
                setFetching(false)
                setItems(true)
                
                
            })

    }, [])

    
   


    return(
        <div>
               <div id="camisetass">
                <h4 id="liga">¡TODAS LAS CAMISETAS DE ESTA TEMPORADA!</h4>
                <p className="aviso">*Disponemos de todas las equipaciones, pregunta por WhatsApp o mándanos un correo.</p>
            {fetching && <h1>Cargando...</h1>}


            {shirt.map((coffee) => {
                const noAvailable = !coffee.available ? 'noStock' : ''
                return (
                    <div  className={noAvailable} id='box-productss' key={coffee.id}>
                       <Link to={`/shirt/${coffee.team_name}`}>  <img id="imagenn" src={coffee.img} alt={coffee.team_name} /></Link>
                        <div className="info-cardd">
                            
                        <h4>{coffee.team_name}</h4>
                        <p>{coffee.price},00€</p>
                        </div>

                        <ButtonAdd  shirt={coffee}/>


                    </div>
                )
            })}
            

            <Link to={`/Tienda2`}><button className="margen" class="cta">
    <span class="hover-underline-animation">Página anterior</span>
    
</button></Link>
        </div>
        </div>
    )
}


export default Tienda3
