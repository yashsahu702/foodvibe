import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from "./pages/Error";
import Success from './pages/Success';
import ProtectedRoute from './components/ProtectedRoute';
import Payment from './pages/Payment'; // adjust path as needed
import PaymentPage from './pages/PaymentPage';
function App() {
  document.title = "FoodVibe";
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/success' element={<ProtectedRoute element={<Success />} />}></Route>
        <Route path="/summary" element={<Payment />} />
        <Route path="/payment/section" element={<PaymentPage />} />
        <Route path='/*' element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
