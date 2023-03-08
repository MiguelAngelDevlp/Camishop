import './MisteryBox.css'

// import seguridad from '../../Assets/mistery-chandal.webp'
// import mmm from '../../Assets/mistery-fut.webp'
// import foto from '../../Assets/Mistery-nba.webp'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/Context'
import axios from 'axios'
import ButtonAdd from '../ButtonAdd/ButtonAdd'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const MisteryBox = () => {


    
    
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
                const cafeSort = response.data.teams.slice(98, 101)
                
    
                const cafeMain = cafeSort
    
                setShirt(cafeMain)
                setFetching(false)
                setItems(true)
                
                
            })
            // .catch(err => console.error(err))
    }, [])
    
    
    
    
    return(
        <div>
               <div id="camisetasss">
                <h4 id="liga">Mistery Box</h4>
            {fetching && <h1>Cargando...</h1>}
    
    
            {shirt.map((coffee) => {
                const noAvailable = !coffee.available ? 'noStock' : ''
                return (
                    <div  className={noAvailable} id='box-productsss' key={coffee.id}>
                                                  


                                                  <Link to={`/shirt/${coffee.team_name}`}> <img id="imagennn" src={coffee.img} alt={coffee.team_name} /></Link>
                        <div className="info-carddd">
                            
                        <h4>{coffee.team_name}</h4>
                        <p>{coffee.price},00€</p>
                        </div>
                        <ButtonAdd shirt={coffee}/>
    
                    </div>
                )
            })}
            
    
    
        </div>
        </div>
    )
   




}

export default MisteryBox













