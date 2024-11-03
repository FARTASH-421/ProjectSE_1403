import { useState } from 'react';
import './loginSignUp.css';

const LoginPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    let [SignUp, setSignUp] = useState([{
        name: "",
        userNumber:"",
        pass: "",
        
    }])
    let [Login, setLogin] = useState(
        {
            userName:"",
            pass: ""
        }
    );

    const handleSignUp = () => {
        setIsSignUp(true);
    };

    const handleSignIn = () => {
        setIsSignUp(false);
    };

    return (
        <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1 className="title-login">ایجاد حساب</h1>
                    <div className="creat-account">
                        <input type="text" placeholder="نام کاربر" className="inp" />
                        <input type="text" placeholder="شماره تماس" className="inp" />
                        <input type="email" placeholder="ایمیل" className="inp" />
                        <input type="password" placeholder="رمز" className="inp" />
                    </div>
                    <button type="submit">ثبت نام</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1 className="title-login">ورود به حساب</h1>
                    <input type="email" placeholder="ایمیل*" className="inp" />
                    <input type="password" placeholder="رمز*" className="inp" />
                    <a href="./index.html">گذرواژه خود را فراموش کردید؟</a>
                    <button type="submit">ورود</button>
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
            <footer>
                <h1>this is for footer</h1>
            </footer>
        </div>
    );
};

export default LoginPage;
