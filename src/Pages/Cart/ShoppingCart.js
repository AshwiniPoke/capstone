import React, { useState, useEffect } from "react";
import '../../sass/main.css';
import paypal from '../../Images/PP_BTN.png'
import { useSelector, useDispatch } from "react-redux/es/exports";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { handleAction } from "../../Redux/cartSlice";
import { useNavigate } from "react-router-dom";


// const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 4,
//         slidesToSlide: 3 // optional, default to 1.
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 3,
//         slidesToSlide: 2 // optional, default to 1.
//     }
// }


export default function ShoppingBag() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const cartData = useSelector((value) => {
        return value.cart.item;
    });

    const subTotal = useSelector((state) => state.cart.cartTotalAmount);

    useEffect(() => {
        dispatch(handleAction.getTotals())

    }, [subTotal, dispatch])



    const handleDecreaseItem = (value) => {
        dispatch(handleAction.decreaseCartItem(value))
    }

    const handleIncreaseItem = (value) => {
        dispatch(handleAction.increaseCartItem(value))
    }

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []
    );

    return (
        <>
            <h1>Your Shopping Bag</h1>
            <img className="headerBorder" src={require('../../Images/max-width_header.svg').default}></img>
          


            <div className="aem-Grid aem-Grid--12 Cart">
                <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                    {cartData.map((value) => {
                        console.log("cart values", value);

                        return (
                            <>
                                <div className="aem-Grid aem-Grid--12">
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--6">
                                        <div className="aem-Grid aem-Grid--12 ">

                                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn aem-GridColumn--phone--5 ">
                                                <img src={value.image} className="imageprops" alt="prodImages"></img></div>
                                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--6">
                                                <h4 className="cartProdDetails">{value.title}</h4>
                                                <p className="cartProdDetails"><small>size : medium</small></p>
                                                <p className="cartProdDetails"> <small>color : storm</small></p>
                                                <p className="cartProdDetails"> <small>$ {value.price}</small></p>
                                            </div>
                                            <div className="aem-GridColumn aem-GridColumn--phone--1">
                                                <p className="phoneDots" onClick={() => { }}>...</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12">
                                        {/* <IncDecCount /> */}
                                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 quanBar'>
                                            <button className="quantity-minus" aria-label="DecQuantity" onClick={() => handleDecreaseItem(value)}>-</button>
                                            <input type="text" className='quantity' value={value.cartQuantity} aria-label="quantity" />
                                            {/* <div >{value.cartQuantity}</div> */}
                                            <button className='quantity-plus' aria-label='IncQuantity' onClick={() => handleIncreaseItem(value)}>+</button>
                                        </div>
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--3 editremove">
                                        <p><img src={require("../../Images/edit-2.svg").default} alt="editProd"></img> Edit here</p>
                                        <p><img src={require("../../Images/trash-2.svg").default} alt="removeProd"
                                            onClick={() => { return dispatch(handleAction.removeFromCart(value.id)) }}></img> Remove </p>
                                        <p><img src={require("../../Images/heart.svg").default} alt="Prod"></img> Save for later</p>

                                    </div>

                                </div>
                            </>
                        )
                    })}
                    <div className="aem-Grid aem-Grid--12 discount">
                        <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--12 ">
                            <p className="border">Estimate your Shipping<span className="discrightalign">Shipping to 91001 &nbsp;
                                <img className='downArrow' src={require('../../Images/down-arrow.svg').default} alt='icon' />
                            </span> </p>
                            <p className="border">Enter a Coupon Code<span className="discrightalign">20% discount applied &nbsp;
                                <img className='downArrow' src={require('../../Images/down-arrow.svg').default} alt='icon' />
                            </span></p>
                            <p className="border">Apply Gift Card</p>
                        </div>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4  aem-GridColumn--phone--12 aem-GridColumn--tablet--12 totalSummary">
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn aem-GridColumn--default--12 border pricing">
                            <p ><b>Pricing summary</b></p>
                            <p> Subtotal <span className="rightalign">${subTotal}</span></p>
                            <p>Coupon  <span className="rightalign">-$77.60</span></p>
                            <p>Gift Card  <span className="rightalign">-$100.00</span></p>
                            <p>Estimated Tax  <span className="rightalign">$23.28</span></p>
                            <p>Estimated shipping  <span className="rightalign">FREE</span></p>
                            <p><b>Estimated Total<span className="rightalign">${subTotal}</span></b></p>
                            <button className="checkoutBtn" aria-label="checkOut" onClick={() => navigate(`/checkout`)}>CHECKOUT</button>
                            <img src={paypal} className="paypal" alt="paypal"></img>
                        </div>

                    </div>
                </div>
            </div>

        </>)
}