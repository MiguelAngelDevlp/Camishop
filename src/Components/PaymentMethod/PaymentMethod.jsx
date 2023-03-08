import React, { useState } from 'react';
import './PaymentMethod.css'


const PaymentMethod = () => {
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [showDebitForm, setShowDebitForm] = useState(false);

    const handleRadioChange = event => {
        setSelectedMethod(event.target.value);
        if (event.target.value === 'debit') {
            setShowDebitForm(true);
        } else {
            setShowDebitForm(false);
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        debt: '',
        date: '',
        cvc: '',
    });


    const [errors, setErrors] = useState({
        name: '',
        debt: '',
        date: '',
        cvc: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

        setErrors({
            ...errors,
            [event.target.name]: '',
        });
    };
    const validate = () => {
        let nameError = '';
        let debtError = '';
        let dateError = '';
        let cvcError = '';

        if (!formData.name) {
            nameError = 'Introduzca un nombre valido';
        }

        if (!formData.debt) {
            debtError = 'Introduzca una tarjeta de crédito';
        } else if (/\S+@\S+\.\S+/.test(formData.debt)) {
            debtError = 'Introduzca una tarjeta de crédito';
        }


        if (!formData.cvc) {
            cvcError = 'CVC incorrecto';
        }

        if (!formData.date) {
            dateError = 'Introduzca la fecha correcta';
        }

        if (nameError || debtError || cvcError || dateError) {
            setErrors({ name: nameError, debt: debtError, cvc: cvcError, date: dateError });
            return false;
        }

        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const isValid = validate();
        if (isValid) {
            console.log(formData);
            setFormData({ name: '', debt: '', cvc: '', date: '' });
        }
    };
    return (
        <div id='conteiner-paid'>
            <h3>Checkout</h3>
            <h5>Seleccionar método de pago</h5>
            <div id='conteiner-debit'>
                <input
                    type="radio"
                    id="debit"
                    name="paymentMethod"
                    value="debit"
                    checked={selectedMethod === "debit"}
                    onChange={handleRadioChange}
                />
                <label>Tarjeta de débito <br /> <span>Opción estándar sin seguimiento </span></label>
            </div>
            {showDebitForm && (
                <form onSubmit={handleSubmit}>
                    <div id='titular-form'>
                        <label>Titular</label>
                        <br />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder='Nombre del titular'
                            onChange={handleChange}
                            id='titular'
                        />
                        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    </div>

                    <div id='target-form'>
                        <label>Número de tarjeta</label>
                        <br />
                        <input
                            type="text"
                            name="debt"
                            placeholder="1234 1234 1234 1234"
                            value={formData.debt}
                            onChange={handleChange}
                            id='debt'
                        />
                        {errors.debt && <div style={{ color: 'red' }}>{errors.debt}</div>}
                    </div>
                    <div id='expiration-cvc'>
                        <div id='expiration-form'>
                            <label>Fecha de caducidad</label>
                            <br />
                            <input
                                type="text"
                                name="date"
                                placeholder="MM / YY"
                                value={formData.date}
                                onChange={handleChange}
                                id='tel'
                            />
                            {errors.date && <div style={{ color: 'red' }}>{errors.date}</div>}
                        </div>
                        <div id='secret-form'>
                            <label>CVC</label>
                            <br />
                            <input
                                type="text"
                                name="cvc"
                                placeholder="123"
                                value={formData.cvc}
                                onChange={handleChange}
                                id='cvc'
                            />
                            {errors.cvc && <div style={{ color: 'red' }}>{errors.cvc}</div>}
                        </div>
                    </div>



                    <button id='flexin' type='submit' >Enviar</button>
                </form>
            )}

            <div id='conteiner-transferencia'>
                <input
                    type="radio"
                    id="trans"
                    name="paymentMethod"
                    value="trans"
                    checked={selectedMethod === "trans"}
                    onChange={handleRadioChange}
                />
                <label>Transferencia bancaria a la cuenta ES12 1234 1234 123457890 <br /><span> Será necesario recibir el comprobante de la transferencia para preparar tu pedido </span></label>
            </div>
            <div id='flex'>
                <input
                    type="radio"
                    id="bizum"
                    name="paymentMethod"
                    value="bizum"
                    checked={selectedMethod === "bizum"}
                    onChange={handleRadioChange}
                />
                <label>Bizum</label>
            </div>

        </div>
    );
};
export default PaymentMethod
