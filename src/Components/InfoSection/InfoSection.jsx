import './InfoSection.css'
import wss from '../../Assets/whatsapp.png'
import aduana from '../../Assets/escudo-seguro.png'
import seguridad from '../../Assets/pago-con-tarjetas-de-credito.png'


const InfoSection = () => {


    return (
        <div id='section3'>
            <div className='picMain'>
                <img id='imagen1'src={wss} alt="wss" />
                <h4>ATENCIÓN AL CLIENTE</h4>
                <p>Lunes a Domingo de 9H-21H </p>
                <p>+34 666 666 666</p>
            </div>

            <div className='picMain'>
                <img id='imagen2' src={aduana} alt="List Icon" />
                <h4>PAQUETE LIBRE DE ADUANAS</h4>
            </div>

            <div className='picMains'>
                <img id='imagen3' src={seguridad} alt="List Icon" />
                <h4>PAGOS SEGUROS</h4>
            </div>


        </div>
    )
}

export default InfoSection