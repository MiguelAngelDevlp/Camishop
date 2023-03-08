import { useState } from "react";
import './Checkout.css'

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        country: '',
        poblation: '',
        postal: '',
        street: '',
        num: '',
        piso: '',
        door: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors({});

        const newErrors = {};

        if (!formData.name) {
            newErrors.name = 'El nombre es obligatorio';
        }

        if (!formData.lastName) {
            newErrors.lastName = 'El apellido es obligatorio';
        }

        if (!formData.phone) {
            newErrors.phone = 'El teléfono es obligatorio';
        }

        if (!formData.email) {
            newErrors.email = 'El correo electrónico es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El correo electrónico no es válido';
        }
        if (!formData.num) {
            newErrors.num = 'El país es obligatorio';
        }
        if (!formData.poblation) {
            newErrors.poblation = 'La ciudad es obligatoria';
        }
        if (!formData.postal) {
            newErrors.postal = 'El código postal es necesario';
        }
        if (!formData.street) {
            newErrors.street = 'La calle es necesaria';
        }
        if (!formData.num) {
            newErrors.num = 'El número de calle es necesario';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

    };



    return (
        <div id="checkin">
            <form onSubmit={handleSubmit}>
                <div id="formName">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div id="formLastName">
                    <label htmlFor="lastName">Apellidos:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                    {errors.lastName && <p>{errors.lastName}</p>}
                </div>

                <div id="formPhone">
                    <label htmlFor="phone">Teléfono:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                    {errors.phone && <p>{errors.phone}</p>}
                </div>

                <div id="formEmail">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>


                <div id="box-city">
                    <div id="formPoblation">
                        <label htmlFor="poblation">Población</label>
                        <input
                            type="text"
                            id="poblation"
                            name="poblation"
                            value={formData.poblation}
                            onChange={handleInputChange}
                        />
                        {errors.poblation && <p>{errors.poblation}</p>}
                    </div>

                    <div id="formPostal">
                        <label htmlFor="postal">Código postal</label>
                        <input
                            type="text"
                            id="postal"
                            name="postal"
                            value={formData.postal}
                            onChange={handleInputChange}
                        />
                        {errors.postal && <p>{errors.postal}</p>}
                    </div>

                </div>

                <div id="box-street">

                    <div id="formStreet">
                        <label htmlFor="street">Calle</label>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            value={formData.street}
                            onChange={handleInputChange}
                        />
                        {errors.street && <p>{errors.street}</p>}
                    </div>

                    <div id="formNum">
                        <label htmlFor="num">Número</label>
                        <input
                            type="text"
                            id="num"
                            name="num"
                            value={formData.num}
                            onChange={handleInputChange}
                        />
                        {errors.num && <p>{errors.num}</p>}
                    </div>

                    <div id="formDoor">
                        <label htmlFor="door">Puerta</label>
                        <input
                            type="text"
                            id="door"
                            name="door"
                            value={formData.door}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* <button id='flexin' type='submit' >Enviar</button> */}
                </div>

            </form>

        </div>
    )
}

export default Checkout



