import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { handleAction } from "../../Redux/cartSlice";
import Payment from '../Payment/payment';

const ReviewOrder = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const cartData = useSelector((value) => {
        return value.cart.item;
    });

    const PaymentData = JSON.parse(localStorage.getItem('PaymentForm'));
    const ShippingData = JSON.parse(localStorage.getItem('ShippingForm'));
    const ContactData = JSON.parse(localStorage.getItem('ContactForm'));
    console.log(PaymentData);

    const subTotal = useSelector((state) => state.cart.cartTotalAmount);

    useEffect(() => {
        dispatch(handleAction.getTotals())

    }, [subTotal, dispatch])


    return (
        <>
            <h1 >Checkout</h1>
            <img className="headerBorder" src={require('../../Images/max-width_header.svg').default}></img>
            <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 aem-Grid--tablet--12 container-fluid'>
                <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12'>
                    <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 boxBorder'>
                        <div className='aem-Grid aem-Grid--12 localData'>
                            <div className='aem-GridColumn aem-GridColumn--default--10 '>
                                <p>Shipping Information</p>
                            </div>
                            <div className='aem-GridColumn aem-GridColumn--default--2  editInfo'>
                                <img src={require('../../Images/edit-2 (1).svg').default}></img><span className='editColor'> Edit</span>
                            </div>
                        </div>
                        <div className="aem-Grid aem-Grid--12 alignLeft">
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--5 ">
                                <small>{ContactData.email}</small><br />
                                <small>{ContactData.contact}</small>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--5">
                                <small>{ContactData.fname} {ContactData.lname}</small><br />
                                <small>{ContactData.stAddr}</small><br />
                                <small>{ContactData.city} {ContactData.state} {ContactData.zip}</small><br />
                                <small>{ContactData.country}</small><br />
                            </div>
                        </div>
                    </div><br />
                    <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 boxBorder'>
                        <div className='aem-Grid aem-Grid--12 localData'>
                            <div className='aem-GridColumn aem-GridColumn--default--10 '>
                                <p>Shipping Method</p>
                            </div>
                            <div className='aem-GridColumn aem-GridColumn--default--2 editInfo'>
                                <img src={require('../../Images/edit-2 (1).svg').default}></img><span className='editColor'> Edit</span>
                            </div>
                        </div>
                        <small className="alignleft">{ShippingData.shippingMethod}</small>
                    </div><br />
                    <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 boxBorder'>
                        <div className='aem-Grid aem-Grid--12 localData'>
                            <div className='aem-GridColumn aem-GridColumn--default--10 '>
                                <p>Payment Information</p>
                            </div>
                            <div className='aem-GridColumn aem-GridColumn--default--2  editInfo'>
                                <img src={require('../../Images/edit-2 (1).svg').default}></img><span className='editColor'> Edit</span>
                            </div>
                            <div className='aem-Grid aem-Grid--12'>
                                <div className='aem-GridColumn aem-GridColumn--default--6'>
                                    <small>{PaymentData.paymentMode}</small><br />
                                    <p><small>Credit Card</small></p>
                                    <small>Visa ending in {PaymentData.cvv} </small>
                                </div>
                            </div>

                        </div>
                    </div><br />
                    <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 boxBorder'>
                        <div className='aem-Grid aem-Grid--12 alignLeft'>
                            <p>{cartData.length} items in your order</p>
                            <div className=' aem-Grid aem-Grid--12 reviewOrderItems'>
                                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--6 singleOrderItem" >
                                    {cartData.map((value) => {
                                        console.log("cart values", value);

                                        return (
                                            <>
                                                {/* <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 '>
                                                    <div className='aem-GridColumn aem-GridColumn--default--12  aem-GridColumn--phone--12'> */}
                                                        <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 item1'>
                                                            <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--9'>
                                                                <img src={value.image} className="cartDataImage" alt="prodImages"></img>
                                                            </div>
                                                            <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12'>
                                                                <b>{value.title}</b>
                                                                <p>size: Medium</p>
                                                                <p>Color: Storm</p>
                                                                <p>Quantity: 1</p>
                                                            </div>
                                                        </div>
                                                    {/* </div>
                                                </div> */}
                                            </>
                                        )
                                    })
                                    }

                                </div>
                            </div>
                        </div>

                    </div><br />
                    <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12'>
                        <button className='placeOrderBtn' onClick={() => navigate(`/ordersuccess`)}>PLACE ORDER</button>
                        <p>By clicking confirm order you agree to our Terms and Conditions</p>
                    </div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3  aem-GridColumn--phone--12 aem-GridColumn--tablet--12 totalSummary">
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn aem-GridColumn--default--12 border pricing">
                            <p ><b>Pricing summary</b></p>
                            <p> Subtotal <span className="rightalign">${subTotal}</span></p>
                            <p>Coupon  <span className="rightalign">-$77.60</span></p>
                            <p>Gift Card  <span className="rightalign">-$100.00</span></p>
                            <p>Estimated Tax  <span className="rightalign">$23.28</span></p>
                            <p>Estimated shipping  <span className="rightalign">FREE</span></p>
                            <p><b>Order Total<span className="rightalign">${subTotal}</span></b></p>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default ReviewOrder;