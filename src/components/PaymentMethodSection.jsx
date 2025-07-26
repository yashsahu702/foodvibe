import React, { useState } from "react";
import upiIcon from "../icons/upi.png";
import cardIcon from "../icons/card.png";
import codIcon from "../icons/cpd.png"; // Rename to cod.png if it's a typo
import { useNavigate } from 'react-router-dom';
const PaymentMethod = () => {
    const [selectedMethod, setSelectedMethod] = useState("cod");
    const [upiId, setUpiId] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpiry, setCardExpiry] = useState("");
    const [cardCVV, setCardCVV] = useState("");
    const navigate = useNavigate();
    const handleConfirm = () => {
        let paymentInfo = "";
        if (selectedMethod === "upi") {
            if (upiId === '') return
            paymentInfo = `UPI ID: ${upiId}`;
        }
        else if (selectedMethod === "card") {
            if (!cardCVV || !cardExpiry || !cardNumber) return;
            paymentInfo = `Card: ${cardNumber}`;
        }
        else paymentInfo = "Cash on Delivery";

        alert(`Payment Method Selected:\n${paymentInfo}`);
        navigate("/success")
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.head}>Select Payment Method</h2>

            {/* UPI */}
            <label style={styles.option}>
                <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={selectedMethod === "upi"}
                    onChange={() => setSelectedMethod("upi")}
                />
                <img src={upiIcon} alt="UPI" style={styles.icon} />
                UPI
            </label>

            {/* CARD */}
            <label style={styles.option}>
                <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={selectedMethod === "card"}
                    onChange={() => setSelectedMethod("card")}
                />
                <img src={cardIcon} alt="Card" style={styles.icon} />
                Card
            </label>

            {/* COD */}
            <label style={styles.option}>
                <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={selectedMethod === "cod"}
                    onChange={() => setSelectedMethod("cod")}
                />
                <img src={codIcon} alt="COD" style={styles.icon} />
                Cash on Delivery
            </label>

            {/* Conditional Inputs */}
            {selectedMethod === "upi" && (
                <input
                    type="text"
                    placeholder="Enter UPI ID"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    style={styles.input}
                />
            )}

            {selectedMethod === "card" && (
                <div>
                    <input
                        type="text"
                        placeholder="Card Number"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        style={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Expiry Date (MM/YY)"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        style={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="CVV"
                        value={cardCVV}
                        onChange={(e) => setCardCVV(e.target.value)}
                        style={styles.input}
                    />
                </div>
            )}

            {/* Confirm Button */}
            <button onClick={handleConfirm} style={styles.button}>
                Confirm Payment
            </button>
        </div>
    );
};

// ✅ Basic styling (you can convert to CSS later)
const styles = {
    container: {
        padding: "20px",
        maxWidth: "400px",
        height: "90vh",
        margin: "auto",
        background: "#f9f9f1",
        borderRadius: "8px",
    },
    head: {
        marginBottom: "20px",
        textAlign: "center",
    },
    option: {
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        padding: "20px",
        gap: "20px",
        background: "#e3e2e1",
        borderRadius: "10px"
    },
    icon: {
        width: "30px",
        height: "30px",
    },
    input: {
        display: "block",
        width: "90%",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "10px 20px",
        background: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        width: "100%",
    },
};

export default PaymentMethod;
