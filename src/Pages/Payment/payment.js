import React, { useState } from "react";
import '../../sass/main.css';

const Payment = ({ accorhandler3 }) => {

    const initialValues = { nameOnCard: "", cardNumber: "", expiration: "", cvv: "" };
    const [formValues, setFormValues] = useState(initialValues);

    const ShippingData = JSON.parse(localStorage.getItem('ShippingForm'));
    const ContactData = JSON.parse(localStorage.getItem('ContactForm'));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        accorhandler3();
    }
    React.useEffect(() => {
        localStorage.setItem("PaymentForm", JSON.stringify(formValues));
    }, [formValues]);

    return (
        <>
            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--12 container-fluid">
                <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 boxBorder'>
                    <div className='aem-Grid aem-Grid--12 localData'>
                        <div className='aem-GridColumn aem-GridColumn--default--10'>
                            <p>Shipping Information</p>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--2 editInfo'>
                            <img src={require('../../Images/edit-2 (1).svg').default}></img><span className='editColor'> Edit</span>
                        </div>
                    </div>
                    <div className="aem-Grid aem-Grid--12 alignLeft">
                        <div className="aem-GridColumn aem-GridColumn--default--4">
                            <small>{ContactData.email}</small><br />
                            <small>{ContactData.contact}</small>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--4">
                            <small>{ContactData.fname} {ContactData.lname}</small><br />
                            <small>{ContactData.stAddr}</small><br />
                            <small>{ContactData.city} {ContactData.state} {ContactData.zip}</small><br />
                            <small>{ContactData.country}</small><br />
                        </div>
                    </div>
                </div><br />
                <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 boxBorder'>
                    <div className='aem-Grid aem-Grid--12 localData'>
                        <div className='aem-GridColumn aem-GridColumn--default--10'>
                            <p>Shipping Method</p>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--2 editInfo'>
                            <img src={require('../../Images/edit-2 (1).svg').default}></img><span className='editColor'> Edit</span>
                        </div>
                    </div>
                    <small className="alignleft">{ShippingData.shippingMethod}</small>
                </div><br />
                <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 paymentForm">

                    <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--12">
                        <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
                            <p>3. Payment Information</p>
                            <form onSubmit={handleSubmit}>
                                <div className='radio'>
                                    <input type="radio" id="creditCard" name="paymentMode" value="Credit Card" onChange={handleChange} />
                                    <label htmlFor="creditCard">Credit Card</label><br />
                                    <label>Name on Card <br />
                                        <input type="text" className="input" id="nameOnCard" name="nameOnCard"
                                            value={formValues.nameOnCard} onChange={handleChange} />
                                    </label>
                                    <br />
                                    <label htmlFor="nameOnCard">Credit card number <br />
                                        <input type="text" className="input" id="cardNumber" name="cardNumber"
                                            value={formValues.cardNumber} onChange={handleChange} />
                                    </label>
                                    <br />
                                    <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--12">
                                        <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--8">
                                            <label htmlFor="expiration">Expiration Date <br />
                                                <input type="text" className="input" id="expiration" name="expiration"
                                                    value={formValues.expiration} onChange={handleChange} style={{ width: "15rem" }} />
                                            </label>
                                        </div>
                                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--4">
                                            <label htmlFor="cvv">cvv <br />
                                                <input type="text" className="input" id="cvv" name="cvv"
                                                    value={formValues.cvv} onChange={handleChange} style={{ width: "5rem" }} />
                                            </label>

                                        </div>
                                        <p>Billing Address Same as shipping address</p>
                                        <hr />
                                        <input type="radio" id="paypal" name="paymentMode" value="Paypal" onChange={handleChange} />
                                        <label htmlFor="paypal">Paypal</label><br />
                                    </div>
                                    <hr />
                                    <div className="formbtn">
                                        <button type="submit" className="aem-GridColumn aem-GridColumn--phone--hide shopcollbtn" >CONTINUE TO REVIEW ORDER</button>
                                        <button type="submit" className="btnphoneview" >CONTINUE</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Payment;