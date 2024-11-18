import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Login_Page/loginSignup";
import HomePage from "./HomePage/homepage";
import ForgotPassword from "./Login_Page/ForgotPassword";



function App() {
  return (
    <Router>
        
      <Routes>
        <Route path="/" element={< HomePage />} />
        {/* <Route path="/home" element={< HomePage />} /> */}
        <Route path="/login" element={< LoginPage/>} />
        {/* <Route path="/profile" element={< Profile />} /> */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        

      </Routes>
      
    </Router>
  );
}

export default App;
