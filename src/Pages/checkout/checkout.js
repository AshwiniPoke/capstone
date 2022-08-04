import React, { useState } from "react";
import CheckoutPage from "./checkoutpage";
import ShippingPage from "../Shipping/shipping";
import Payment from "../Payment/payment";
import ReviewOrder from "../Order/reviewOrder";

const Checkout = () => {
    const [isSubmit, setIsSubmit] = useState(true);
    const [isContact, setIsContact] = useState(false);
    const [isShipping, setIsShipping] = useState(false);
    const [isPayment, setIsPayment] = useState(false);
    const [isOrder, setIsOrder] = useState(false);

    const accorhandler1 = () => {
        setIsSubmit(!isSubmit);
        setIsContact(!isContact)
    }
    const accorhandler2 = () => {
        setIsContact(!isContact);
         setIsShipping(!isShipping)
    }
    const accorhandler3 = () => {
        setIsShipping(!isShipping)
        setIsOrder(!isOrder)
    }

    return (
        <div className="checkout">
            {isSubmit && <CheckoutPage accorhandler1={accorhandler1} />}
            {isContact && <ShippingPage accorhandler2={accorhandler2} />}
            {isShipping && <Payment accorhandler3={accorhandler3} />}
            {isOrder && <ReviewOrder />}
        </div>
    );

}
export default Checkout;