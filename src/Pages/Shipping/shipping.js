import { useState } from "react";
import React  from 'react';

const ShippingPage = ({accorhandler2}) => {

    const initialValues = {shippingMethod:""};
    const[formValues, setFormValues] = useState(initialValues);
       
    const ContactData = JSON.parse(localStorage.getItem('ContactForm'));

        const handleChange = (e) => {
            const{name,value}  = e.target;
            setFormValues({...formValues, [name]:value}); 
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(formValues);
            accorhandler2();
        }
        React.useEffect(() =>{
    localStorage.setItem("ShippingForm", JSON.stringify(formValues));
        },[formValues]);
   
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
                <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 shippingForm">
                   
                    <p>2. Shipping Method</p>
                    <form onSubmit={handleSubmit}>
                    <div className='radio'>
                        <input type="radio" id="stdShipping" name="shippingMethod" value="Standard Shipping(4-8 business days via USPS) FREE" onChange={handleChange}/>
                        <label htmlFor="stdShipping">Standard Shipping(4-8 business days via USPS) FREE</label><br />
                        <input type="radio" id="expDelivery" name="shippingMethod" value="Express Delivery(2-5 business days via USPS) $17.95" onChange={handleChange} />
                        <label htmlFor="expDelivery">Express Delivery(2-5 business days via USPS) $17.95</label><br />
                        <input type="radio" id="nextDayDelivery" name="shippingMethod" value="Next Day delivery (Next business days via FedEx) $53.61" onChange={handleChange}/>
                        <label htmlFor="nextDayDelivery">Next Day delivery (Next business days via FedEx) $53.61</label><br />
                    </div><br />
                    <div className="formbtn">
                    <button type="submit" className="shopcollbtn" >CONTINUE TO PAYMENT</button>
                    <button type="submit" className="btnphoneview" >CONTINUE</button>
                    </div>
                    </form>
                    <hr />
                    <p>3. Payment Information</p>
                </div>
                {/* <div className="aem-GridColumn aem-GridColumn--default--3  aem-GridColumn--phone--12 aem-GridColumn--tablet--12 SummaryBox">
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn aem-GridColumn--default--12 border pricing">
                            <p ><b>Pricing summary</b></p>
                            <p> Subtotal <span className="rightalign">$0</span></p>
                            <p>Coupon  <span className="rightalign">-$77.60</span></p>
                            <p>Gift Card  <span className="rightalign">-$100.00</span></p>
                            <p>Estimated Tax  <span className="rightalign">$23.28</span></p>
                            <p>Estimated shipping  <span className="rightalign">FREE</span></p>
                            <p><b>Estimated Total<span className="rightalign">$0</span></b></p>
                           
                        </div>

                    </div>
                </div> */}
            </div>
        </>
    )
}

export default ShippingPage;