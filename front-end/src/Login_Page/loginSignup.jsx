import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './loginSignUp.css';

const LoginPage = () => {


    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

  
    const [signUpData, setSignUpData] = useState({
        name: "",
        userNumber: "",
        email: "",
        password: "",
    });

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });


    const handleSignUp = () => {
        setIsSignUp(true);
    };

    const handleSignIn = () => {
        setIsSignUp(false);
    };

    const handleSignUpChange = (e) => {
        const { name, value } = e.target;
        if(value.legt> 10){
            setError('نام کاربر یا گذرواژه اشتباه است');
            
        }else{

            setSignUpData(prevData => ({ ...prevData, [name]: value }));
        }
    };

    const handleLoginChange = (e) => {
        setError('')
        const { name, value } = e.target;
        setLoginData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();

        localStorage.setItem('dataUser', JSON.stringify(signUpData));
        localStorage.setItem('user', signUpData.name);
        localStorage.setItem('login', true);
        navigate('/home');
        


        // try {
        //     const response = await fetch('https://your-backend-api.com/signup', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(signUpData),
        //     });

        //     const data = await response.json();
        //     if (response.ok) {
        //         setMessage('Sign up successful!');
        //     } else {
        //         setMessage(`Error: ${data.message}`);
        //     }
        // } catch (error) {
        //     setMessage('Network error, please try again later.');
        // }
    };



    const handleLoginSubmit = (e) => {
        e.preventDefault();
       

            // const userName = "admin";
            // const password = "12345";
            const userName = loginData.email;
            localStorage.setItem('user', userName);
            localStorage.setItem('login', true);
           
            // if(loginData.email === userName && loginData.password === password){
              
                
                navigate('/home');
                   
               

            // }else {
            //     setError('نام کاربر یا گذرواژه اشتباه است');
            
            // }
 // try {

            // const response = await fetch('https://your-backend-api.com/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(loginData),
            // });

            // const data = await response.json();
            // if (response.ok) {
            //     setMessage('Login successful!');
            // } else {
            //     setMessage(`Error: ${data.message}`);
            // }
        // } catch (error) {
        //     setMessage('Network error, please try again later.');
        // }
    };

    return (
        <div className = "LoginBody">
            <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
            <div className="form-container sign-up-container">
                <form onSubmit={handleSignUpSubmit}>
                    <h1 className="title-login">ایجاد حساب</h1>
                    <div className="creat-account">
                        <input type="text" name="name" placeholder="نام کاربر" className="inp" onChange={handleSignUpChange} required />
                        <input type="text" name="userNumber" placeholder="شماره تماس" className="inp" onChange={handleSignUpChange} required />
                        <input type="email" name="email" placeholder="ایمیل" className="inp" onChange={handleSignUpChange} required />
                        <input type="password" name="password" placeholder="رمز" className="inp" onChange={handleSignUpChange} required />
                    </div>
                    <button type="submit">ثبت نام</button>
                </form>
            </div>

            <div className="form-container sign-in-container">
                <form onSubmit={handleLoginSubmit}>
                    <h1 className="title-login">ورود به حساب</h1>
                    <input type="text" name="email" placeholder="ایمیل*" className="inp" onChange={handleLoginChange} required />
                    <input type="password" name="password" placeholder="رمز*" className="inp" onChange={handleLoginChange} required />
                    <a href="./forgot-password">گذرواژه خود را فراموش کردید؟</a>
                    <button type="submit">ورود</button>
                    {error && <p className="error" style={{color: "red",fontWeight:"bold"}}>{error}</p>}
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" onClick={handleSignIn}>ورود به برنامه</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" onClick={handleSignUp}>ایجاد حساب</button>
                    </div>
                </div>
            </div>
           
        </div>
     </div>
        
    );
};

export default LoginPage;
