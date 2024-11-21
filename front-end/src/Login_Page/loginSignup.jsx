import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './loginSignUp.css';

const LoginPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();

    const [signUpData, setSignUpData] = useState({
        name: "",
        userNumber: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        name: '',
        userNumber: '',
        email: '',
        password: '',
    });

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const [loginErrors, setLoginErrors] = useState({
        email: '',
        password: ''
    });

    const handleSignUp = () => {
        setLoginErrors({
            email: '',
            password: ''
        });
        setIsSignUp(true);
    };

    const handleSignIn = () => {
        setErrors({
            name: '',
            userNumber: '',
            email: '',
            password: '',
        });
        setIsSignUp(false);
    };

    const handleSignUpChange = (e) => {
        const { name, value } = e.target;
        setSignUpData(prevData => ({ ...prevData, [name]: value }));

        // Validation
        let error = '';
        if (name === "name" && value.length < 4) {
            error = 'نام باید حداقل 4 کاراکتر باشد';
        } else if (name === "userNumber" && !/^09[0-9]{9}$/.test(value)) {
            error = 'فارمت شماره تماس درست نمی باشد';
        } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = 'ایمیل وارد شده معتبر نیست.';
        } else if (name === "password" && value.length < 8) {
            error = 'رمز عبور باید حداقل 8 کاراکتر باشد';
        }
        setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevData => ({ ...prevData, [name]: value }));

        // Validation
        let error = '';
        if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = 'ایمیل وارد شده معتبر نیست';
        } else if (name === "password" && value.length < 8) {
            error = 'رمز عبور باید حداقل 8 کاراکتر باشد';
        }
        setLoginErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if (Object.values(errors).some(error => error)) {
            setErrors('نادرست است')
            return; // Prevent submission if there are errors
        }
        localStorage.setItem('dataUser', JSON.stringify(signUpData));
        localStorage.setItem('user', signUpData.name);
        localStorage.setItem('login', true);
        navigate('/home');
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (Object.values(loginErrors).some(error => error)) {
            return; // Prevent submission if there are errors
        }
        localStorage.setItem('user', loginData.email);
        localStorage.setItem('login', true);
        navigate('/home');
    };

    return (
        <div className="LoginBody">
            <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={handleSignUpSubmit}>
                        <h1 className="title-login">ایجاد حساب</h1>
                        <div className="creat-account">
                          
                                <input type="text" name="name" placeholder="نام کاربر" className="inp" onChange={handleSignUpChange} required  />
                                {errors.name && <p className="error">{errors.name}</p>}
                            
                            
                            
                                <input type="text" name="userNumber" placeholder="شماره تماس" className="inp" onChange={handleSignUpChange} required />
                                {errors.userNumber && <p className="error">{errors.userNumber}</p>}
                            
                            
                                <input type="email" name="email" placeholder="ایمیل" className="inp" onChange={handleSignUpChange}  required/>
                                {errors.email && <p className="error">{errors.email}</p>}   
                            
                            

                                <input type="password" name="password" placeholder="رمز" className="inp" onChange={handleSignUpChange} required />
                                {errors.password && <p className="error">{errors.password}</p>}
                            
                        </div>
                        <button type="submit">ثبت نام</button>
                    </form>
                </div>

                <div className="form-container sign-in-container">
                    <form onSubmit={handleLoginSubmit}>
                        <h1 className="title-login">ورود به حساب</h1>
                        <input type="text" name="email" placeholder="ایمیل*" className="inp" onChange={handleLoginChange} required />
                        {loginErrors.email && <p className="error">{loginErrors.email}</p>}

                        <input type="password" name="password" placeholder="رمز*" className="inp" onChange={handleLoginChange}required/>
                        {loginErrors.password && <p className="error">{loginErrors.password}</p>}

                        <a href="./forgot-password">گذرواژه خود را فراموش کردید؟</a>
                        <button type="submit">ورود</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Hello, Friend!</h1>
                            <b className='textInput'>سلامتی تنها نبودن بیماری نیست، بلکه یک حالت کامل از رفاه جسمی، روحی و اجتماعی است</b>
                            <button className="ghost" onClick={handleSignIn}>ورود به برنامه</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Welcome Back!</h1>
                            <span className='textSingup'>سلامتی گنجی است که در بدن ما نهفته است، از آن مراقبت کنیم تا همیشه درخشان بماند</span>
                            <button className="ghost" onClick={handleSignUp}>ایجاد حساب</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
