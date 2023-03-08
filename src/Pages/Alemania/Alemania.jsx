
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import ButtonAdd from '../../Components/ButtonAdd/ButtonAdd'
import Footer from '../../Components/Footer/Footer'
import { CartContext } from '../../Context/Context'
import './Alemania.css'


const Alemania = () => {


    const apiURL = 'https://api-camishop.vercel.app'

    const [shirt, setShirt] = useState([])
    const [fetching, setFetching] = useState(true)
    const [items, setItems] = useState(false);
    const { choose, setChoose } = useContext(CartContext)
    const { cart, setCart } = useContext(CartContext)

    useEffect(() => {
        axios
            .get(apiURL)
            .then((response) => {
                const cafeSort = response.data.teams.slice(81, 98)


                const cafeMain = cafeSort

                setShirt(cafeMain)
                setFetching(false)
                setItems(true)


            })
        // .catch(err => console.error(err))
    }, [])



    return (
        <div>
            <div id="camisetasss">
                <h4 id='liga'>Liga Alemana 22/23</h4>
                <p className="aviso">*Disponemos de todas las equipaciones, pregunta por WhatsApp o mándanos un correo.</p>
                {fetching && <h1>Cargando...</h1>}


                {shirt.map((coffee) => {
                    const noAvailable = !coffee.available ? 'noStock' : ''
                    return (
                        <div className={noAvailable} id='box-productsss' key={coffee.id}>

                            <Link to={`/shirt/${coffee.team_name}`}>  <img id="imagennn" src={coffee.img} alt={coffee.team_name} /></Link>
                            {/* </Link> */}
                            <div className="info-carddd">

                                <h4>{coffee.team_name}</h4>
                                <p>{coffee.price},00€</p>
                            </div>
                            <ButtonAdd shirt={coffee} />

                        </div>
                    )
                })}



            </div>
            <Footer />
        </div>
    )
}


export default Alemania