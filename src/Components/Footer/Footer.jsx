import './Footer.css'
import tlf from '../../Assets/icons8-teléfono-26.png'
import correo from '../../Assets/icons8-gmail-64.png'

const Footer = () => {


    return (
        <div id='pre-footer'>

            <div id='logos-footer'>
                {/* <IconLogo /> */}

                <h5>Contáctanos en</h5>

                <div id='number'>
                        <img className="small" src={tlf} alt="Icon Telephone" id="phone-icon" />
                        <p id='numero'> +34 666 66 66 66</p>
                </div>

                <div id='number'>
                        <img className="small" src={correo} alt="Icon Telephone" id="phone-icon" />
                        <p className='correo'>mundocamishop@gmail.com</p>
                </div>
            </div>

            {/* <NavList className={'list-footer'} /> */}

            <div id='listTerms'>
                <h4>Mas información</h4>
                <ul>
                    <li>Envios</li>
                    <li>Politica de reembolsos</li>
                    <li>Cancelación de pedidos</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer