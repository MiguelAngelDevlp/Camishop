
import { useState } from 'react'
import logo from '../../Assets/Mundocamishop.jpg'
import './NavList.css'
import bagImage from '../../Assets/bolsa.png'
import { Link } from 'react-router-dom'
import Bag from '../Bag/Bag'


const NavList = () => {

    const [showList, setShowList] = useState(false)


    const toggleShowList = () => {
        setShowList(!showList)
    }



    return (

        <div className='nav'>
            <div id='imgLogo'>
            <Link to="/" rel="">

                <img id="logo" src={logo} alt="Logo Cafe de Altura" />
            </Link>
            </div>



            <div>

                <ul className='navbar-list'>
                <Link to="/" rel=""> <li>Inicio</li></Link>
                <Link to="/Tienda" rel="">  <li>Tienda</li></Link>
                    <li onMouseOver={() => toggleShowList()}>Fútbol</li>
                    <Link to="/Chandals" rel=""><li>Chandals</li></Link>
                    <Link to="/NBA" rel=""> <li> NBA </li></Link>
                </ul>

            </div>





            {showList && <div id='show-nav'>

                <Link to="/España" rel=""> <li  id='slect' style={{ borderBottom: '1px solid rgb(179, 179, 179)', paddingBottom: '15px' }}>
                    España
                </li>
                       </Link>
                       <Link to="/Inglaterra" rel=""> <li id='slect' style={{ borderBottom: '1px solid rgb(179, 179, 179)', paddingBottom: '15px' }}>
                    Inglaterra
                </li></Link>
                <Link to="/Italia" rel="">  <li id='slect' style={{ borderBottom: '1px solid rgb(179, 179, 179)', paddingBottom: '15px',  }}>
                    Italia
                </li></Link>
                <Link to="/Alemania" rel=""> <li id='slect' style={{ borderBottom: '1px solid rgb(179, 179, 179)', paddingBottom: '15px' }}>
                    Alemania
                </li></Link>
                <Link to="/Francia" rel="">  <li id='slect' style={{ borderBottom: '1px solid rgb(179, 179, 179)', paddingBottom: '15px' }}>
                    Francia
                </li></Link>


            </div>}

           <Bag/>
        </div>
    )
}


export default NavList