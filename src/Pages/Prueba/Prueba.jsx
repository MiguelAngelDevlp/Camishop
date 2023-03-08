
// import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
// import Button from "../../Components/Button/Button";
// import Footer from "../../Components/Footer/Footer";
// import { CartContext } from "../../Context/Context";
// import './Prueba.css'

// const Prueba = () => {
//     const { team_name } = useParams();
//     const { allShirts } = useContext(CartContext);
//     const [prueba, setPrueba] = useState(null);
//     const [quantity, setQuantity] = useState(1);



//     useEffect(() => {
//         console.log(allShirts);
//         const equipo2 = allShirts.find((equipo) => equipo.team_name === team_name);
//         console.log(equipo2);
//         setPrueba(equipo2);
//     }, [allShirts]);

//     if (!prueba) {
//         return <div>Loading...</div>;
//     }

//     const handleQuantityChange=(event)=> {
//         setQuantity(Number(event.target.value));
//     }

//     const decrementQuantity=() =>{
//         if (quantity > 1) {
//             setQuantity(quantity - 1);
//         }
//     }

//     const incrementQuantity=()=> {
//         if (quantity < 10) {
//             setQuantity(quantity + 1);
//         }
//     }

//     const handleClick = () => {
//         addItem(prueba, quantity);
//       };


//     return (
//         <div>
//             <div className="row">
//                 <div className="col-8">
//                     <h1>MUNDOCAMISHOP</h1>
//                     <div id="fondo">
//                         <h3>{prueba.team_name}</h3>
//                         <h2>{prueba.price},00€</h2>
//                         <p>Ya disponible en Mundocamishop todas las equipaciones de {prueba.team_name}.</p>
//                         <p>Contacta para dudas o consultas mediante WhatsApp al +34 666 66 66 66.</p>
//                         <form>
//                             <label htmlFor="size">Talla:</label>
//                             <select id="size" name="size">
//                                 <option value="xs">XS</option>
//                                 <option value="s">S</option>
//                                 <option value="m">M</option>
//                                 <option value="l">L</option>
//                                 <option value="xl">XL</option>
//                             </select>
//                             <label htmlFor="quantity">Cantidad:</label>
//                             <input type="number" id="quantity" name="quantity" min="1" max="50" value={quantity} onChange={handleQuantityChange} />
//                             <Button className={'boton'} type="button" id="btn" shirt={prueba} quantity={quantity}/>
//                         </form>
//                     </div>
//                 </div>
//                 <div className="col-4">
//                     <img id="foto" src={prueba.img} alt={prueba.name} />
//                 </div>
//             </div>
//             <Footer/>
//         </div>
//     )
// }

// export default Prueba




import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Button from "../../Components/Button/Button";
import Footer from "../../Components/Footer/Footer";
import { CartContext } from "../../Context/Context";
import './Prueba.css'

const Prueba = () => {
    const { team_name } = useParams();
    const { addItem, allShirts } = useContext(CartContext);
    const [prueba, setPrueba] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("xs");

    useEffect(() => {
        console.log(allShirts);
        const equipo2 = allShirts.find((equipo) => equipo.team_name === team_name);
        console.log(equipo2);
        setPrueba(equipo2);
    }, [allShirts]);

    if (!prueba) {
        return <div>Loading...</div>;
    }

    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const incrementQuantity = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    }

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    }

    const handleClick = () => {
        const item = { shirt: prueba, quantity: quantity, size: size };
        addItem(item);
    };




    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <h1>MUNDOCAMISHOP</h1>
                    <div id="fondo">
                        <h3>{prueba.team_name}</h3>
                        <h2>{prueba.price},00€</h2>
                        <p>Ya disponible en Mundocamishop todas las equipaciones de {prueba.team_name}.</p>
                        <p>Contacta para dudas o consultas mediante WhatsApp al +34 666 66 66 66.</p>
                        <form>
                            <label htmlFor="size">Talla:</label>
                            <select id="size" name="size" value={size} onChange={handleSizeChange}>
                                <option value="xs">XS</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                            </select>
                            <label htmlFor="quantity">Cantidad:</label>
                            <input type="number" id="quantity" name="quantity" min="1" max="50" value={quantity} onChange={handleQuantityChange} />
                            <Button className={'boton'} type="button" id="btn" shirt={prueba} quantity={quantity} onClick={handleClick} />
                        </form>
                    </div>
                </div>
                <div className="col-4">
                    <div>

                        <img id="foto" src={prueba.img} alt={prueba.name} />
                    </div>
                    <div id="box-individual">
                        <h3>{prueba.team_name}</h3>
                        <h2>{prueba.price},00€</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Prueba;
