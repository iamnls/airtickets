import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './ForgetPassword';
import About from './pages/About';
import Booking from './pages/Booking';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/Faq';
import Policy from './pages/Policy';
import Terms from './pages/Terms';
import Support from './pages/Support';
import Help from './pages/Help';




const App = () => {
  return (
    <Router>
      <Navbar />     
      <Routes>
        <Route path="/" element={<Home />} />       
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/help" element={<Help/>}/>
        

      
        {/* Add more routes here */}
        
      </Routes>
      <Footer />
    </Router>
  );
};



export default App;