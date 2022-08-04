import React, { useState } from 'react';
import '../../sass/main.css';
import { useSelector, useDispatch } from "react-redux/es/exports";

const SuccessOrder = () => {
    const [] = useState()
    const cartData = useSelector((value) => {
        return value.cart.item;
    });



    return (
        <>
            <h1 >Order Successful!</h1>
            <img className="headerBorder" src={require('../../Images/max-width_header.svg').default}></img>
            <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 aem-Grid--tablet--12'>
                <div className='aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--phone--12 aem-Grid--tablet--12 alignLeft leftmargin'>
                    <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 aem-Grid--tablet--12'>
                        <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12'>
                            <p><b>Order Number #1700834</b></p>
                            <div className='aem-Grid aem-Grid--12'>
                                <div className='aem-GridColumn aem-GridColumn--default--6'>
                                    <p>Shipping Information</p>
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--default--6'>
                                    <p>Shipping Method</p>
                                    <p>Payment Information</p>
                                </div>
                            </div>
                            <div className='aem-Grid aem-Grid--12 '>
                                <p>{cartData.length} items in your order</p>
                                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn aem-GridColumn--phone--6 aem-GridColumn--tablet--6 reviewCartItems" >
                                    {cartData.map((value) => {
                                        console.log("cart values", value);

                                        return (
                                            <>
                                                <div className='aem-Grid aem-Grid--12' style={{ display: "contents" }}>
                                                    <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12'>
                                                        <img src={value.image} className="cartDataImage" alt="prodImages"></img>
                                                    </div>
                                                    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                                                        <b>{value.title}</b>
                                                        <p>size: Medium</p>
                                                        <p>Color: Storm</p>
                                                        <p>Quantity: 1</p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                    }

                                </div>
                            </div>
                            <p> You will also receive an email with the details and we will let you know when your order has shipped.</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.
                            </p>

                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 successBox'>
                            <h2>Give us a follow to SAVE 20% on your next order.</h2><br />
                            <div className="icons ">
                                <span>  <img src={require('../../Images/instagram (1).svg').default} alt='icon' />&nbsp;</span>&nbsp;
                                <span> <img src={require('../../Images/facebook (1).svg').default} alt="icon" />&nbsp;</span>&nbsp;
                                <span> <img src={require('../../Images/twitter (1).svg').default} alt="icon" />&nbsp;</span>&nbsp;

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SuccessOrder;