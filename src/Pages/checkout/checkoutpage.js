import React, { useEffect, useState } from "react";
import '../../sass/main.css';
import { useSelector, useDispatch } from "react-redux/es/exports";
import { handleAction } from "../../Redux/cartSlice";


const CheckoutPage = ({accorhandler1}) => {

    const [isShown, setIsShown] = useState(true);
    const dispatch = useDispatch();

    const initialValues = {email:"", contact:"", fname:"", lname:"", country:"", stAddr:"", stAddr2:"", state:"", city:"", zip:""};
    const[formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        const{name,value}  = e.target;
        setFormValues({...formValues, [name]:value}); 
        // console.log(formValues);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        accorhandler1();
    }
    React.useEffect(() =>{
localStorage.setItem("ContactForm", JSON.stringify(formValues));
    },[formValues]);

    const subTotal = useSelector((state) => state.cart.cartTotalAmount);

    useEffect(() => {
        dispatch(handleAction.getTotals())

    }, [subTotal, dispatch])



    return (
        <>
            <h1 >Checkout</h1>
            <img className="headerBorder" src={require('../../Images/max-width_header.svg').default}></img>
            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--12 container-fluid">
                <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 checkoutForm">
                    <h2>Guest Checkout</h2>

                    <p>Contact information</p>
                    <small>We’ll use these details to keep you informed on your delivery.</small>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--12">
                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                <label htmlFor="email">Email <br />

                                    <input type="email" className="input" id="email" name="email" placeholder="abc@xyz.com"
                                        value={formValues.email} onChange={handleChange} /></label>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                <label htmlFor="contact">Phone Number <br />
                                    <input type="number" className="input" id="contact" name="contact" placeholder="(222) 222-2222"
                                        value={formValues.contact} onChange={handleChange} /></label>
                            </div>
                        </div>
                        <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--12">
                            <p>1. Shipping Information</p>
                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                <label>Country <br />
                                    <select name="country" id="country" className="input" value={formValues.country} onChange={handleChange}>
                                        <option value="India">India</option>
                                        <option value="usa">United States</option>
                                        <option value="uk">United Kingdom</option>
                                    </select>
                                </label>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12"></div>
                        </div>
                        <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--12">
                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                <label>First Name <br />
                                    <input type="text" className="input" id="fname" name="fname" 
                                        value={formValues.fname} onChange={handleChange} />
                                </label>
                                <label>Street Address <br />
                                    <input type="text" className="input" id="stAddr" name="stAddr" 
                                        value={formValues.stAddr} onChange={handleChange} />
                                </label><br />
                                <label>City <br />
                                    <input type="text" className="input" placeholder="Altadena" id="city" name="city"
                                        value={formValues.city} onChange={handleChange} />
                                </label>
                            </div>

                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">

                                <label>Last Name <br />
                                    <input type="text" className="input" id="lname" name="lname"
                                        value={formValues.lname} onChange={handleChange} />
                                </label>
                                <label>Street Address 2 <br />
                                    <input type="text" className="input" id="stAddr2" name="stAddr2"
                                        value={formValues.stAddr2} onChange={handleChange} />
                                </label>
                                <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--12">
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                        <label>State <br />
                                            <select name="state" id="state" className="stateinput"
                                                value={formValues.state} onChange={handleChange}
                                            >
                                                <option value="India">California</option>
                                                <option value="usa">United States</option>
                                                <option value="uk">United Kingdom</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                        <label>Zip <br />
                                            <input type="text" placeholder="91001" className="zipinput" id="zip" name="zip"
                                                value={formValues.zip} onChange={handleChange} />
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="formbtn">
                        <button type="submit" className="btncheckout" style={{width:"250px",textAlign:"center"}}>CONTINUE TO SHIPPING METHOD</button>
                        <button type="submit" className="btnphoneview" >CONTINUE</button>
                        </div>
                    </form>
                    <hr />
                    <p>2. Shipping Method</p>
                    <hr />
                    <p>3. Payment Information</p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide aem-GridColumn--tablet--12">
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--hide signInBox">
                            <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
                                <p> Sign In for Express Checkout </p> </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <button className="btncheckout" style={{ width: "7rem", margin: "1rem" }}>Sign In</button></div>
                        </div>
                        <br />
                        <div className="aem-GridColumn aem-GridColumn--default--12 border pricing" >
                            <p ><b>Pricing summary</b></p>
                            <p> Subtotal <span className="rightalign">${subTotal}</span></p>
                            <p>Coupon  <span className="rightalign">-$77.60</span></p>
                            <p>Gift Card  <span className="rightalign">-$100.00</span></p>
                            <p>Estimated Tax  <span className="rightalign">$23.28</span></p>
                            <p>Estimated shipping  <span className="rightalign">FREE</span></p>
                            <p><b>Estimated Total<span className="rightalign">${subTotal}</span></b></p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutPage;