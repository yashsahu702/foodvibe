import PaymentMethodSection from "../components/PaymentMethodSection";
import { RxArrowLeft } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
function PaymentPage() {
    const navigate = useNavigate();
    return (
        <div className="payment-page">
            <RxArrowLeft
                className="left-icon"
                onClick={() => navigate("/summary")}
            />
            <PaymentMethodSection />
            {/* Add other components like billing details, summary, etc. */}
        </div>
    );
}


export default PaymentPage;