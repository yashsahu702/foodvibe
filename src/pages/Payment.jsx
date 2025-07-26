import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RxCrossCircled } from "react-icons/rx";
const Payment = () => {
    const cart = useSelector((state) => state.cart.cart);
    const navigate = useNavigate();

    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    const totalAmount = cart.reduce((acc, item) => acc + item.qty * item.price, 0);
    const deliveryCharge = 40;
    const grandTotal = totalAmount + deliveryCharge;

    return (

        <div className="payment-page-wrapper">
            {/* Close icon */}
            <RxCrossCircled
                className="close-icon"
                onClick={() => navigate("/")}
            />


            <div className="payment-container">



                <h2 className="payment-heading">Order Summary</h2>

                {cart.length === 0 ? (
                    <p className="empty-msg">Your cart is empty.</p>
                ) : (
                    <div className="table-wrapper">
                        <div className="table-header">
                            <span>#</span>
                            <span>Item</span>
                            <span>Qty</span>
                            <span>Price</span>
                            <span>Subtotal</span>
                        </div>

                        {cart.map((item, index) => (
                            <div key={item.id} className="table-row">
                                <span>{index + 1}</span>
                                <span>{item.name}</span>
                                <span>{item.qty}</span>
                                <span>₹{item.price}</span>
                                <span>₹{item.qty * item.price}</span>
                            </div>
                        ))}

                        <div className="summary-row">
                            <div className="summary-details">
                                <div className="summary-item">
                                    <p><strong>Total Items:</strong></p>
                                    <p>{totalQty}</p>
                                </div>
                                <div className="summary-item">
                                    <p><strong>Total Amount:</strong></p>
                                    <p>₹{totalAmount}</p>
                                </div>
                                <div className="summary-item">
                                    <p><strong>Delivery Charges:</strong></p>
                                    <p>₹{deliveryCharge}</p>
                                </div>
                                <div className="summary-item grand-total">
                                    <p><strong>Grand Total:</strong></p>
                                    <p><strong>₹{grandTotal}</strong></p>
                                </div>
                                <hr />
                            </div>
                            <button className="checkout-btn" onClick={() => navigate("/payment/section")}>
                                Proceed to Pay
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Payment;
