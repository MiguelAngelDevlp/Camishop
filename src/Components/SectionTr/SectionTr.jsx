import percha1 from '../../Assets/definitiva_futbol_720x.webp'
import percha2 from '../../Assets/definitivabaloncesto_720x.webp'
import './SectionTr.css'
import { Link } from 'react-router-dom'
const SectionTr = () => {


    return (
        <div className='section-two'>
            
                <h3 id='novs'>¿QUIERES RECIBIR TUS CAMISETAS SIN ESPERAS?</h3>
                <p className='p'>Disponemos de productos con entrega en 1-2 días hábiles</p>
            
            <div>
                <Link to="/Tienda" rel="">
                    <figure>
                        <img className='tamaño' src={percha1} alt='Futbol' />
                    </figure>
                    <button className='button'>Ver todos</button>
                </Link>
            </div>



            <div>
                <Link to="/NBA" rel="">
                    <figure>
                        <img className='tamaño' src={percha2} alt='NBA' />
                    </figure>
                    <button className='button'>Ver todos</button>
                </Link>
            </div>
        </div>

    )
}


export default SectionTr