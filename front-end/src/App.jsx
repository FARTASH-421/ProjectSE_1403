import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./Login_Page/loginSignup";
import HomePage from "./HomePage/homepage";
import ForgotPassword from "./Login_Page/ForgotPassword";
import LogoutPage from "./Login_Page/LogoutPage";
import { AuthProvider } from './context/useAuth';


function App() {

  return (
      <Router>
         <AuthProvider>
            <Routes>

               <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<LogoutPage />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
    
  );
}
export default App;

