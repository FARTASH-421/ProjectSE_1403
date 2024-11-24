import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/useAuth'
import './loginSignUp.css';



const LoginPage = () => {

    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();
    const { registerUser } = useAuth();
    const { loginUser } = useAuth();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    
    const [signUpData, setSignUpData] = useState({
        name: "",
        userNumber: "",
        email: "",
        password: "",
    });

    // check for errors all feild
    const [error, setError] = useState('');

    const [errors, setErrors] = useState({
        name: '',
        userNumber: '',
        email: '',
        password: '',
    });

    const [loginErrors, setLoginErrors] = useState({
        email: '',
        password: ''
    });


    const handleSignUp = () => {
        setLoginErrors({ email: '',password: ''});
        setLoginData.email ="";
        setLoginData.password="";
        console.log("handel SIngup");
        setError('');
        setIsSignUp(true);
        setErrors({
            name: '',
            userNumber: '',
            email: '',
            password: '',
        });

        setSignUpData({
            name:'',
            userNumber: '',
            email: '',
            password: '',
        });

        setLoginData({
            email: '',
            password: ''
        });
    };

    const handleSignIn = () => {
        setErrors({
            name: '',
            userNumber: '',
            email: '',
            password: '',
        });

        setSignUpData({
            name:'',
            userNumber: '',
            email: '',
            password: '',
        });

        setLoginData({
            email: '',
            password: ''
        });

        setError('');
        setIsSignUp(false);
    };

    const handleSignUpChange = (e) => {
        setError('');
        const { name, value } = e.target;
        setSignUpData(prevData => ({ ...prevData, [name]: value }));

        // Validation
        let error = '';
        if (name === "name" && value.length < 4) {
            error = 'نام باید حداقل 4 کاراکتر باشد';
            if(value.length == 0){
                error='';
            }
        } else if (name === "userNumber" && !/^09[0-9]{9}$/.test(value)) {
            error = 'فارمت شماره تماس درست نمی باشد';
            if(value.length == 0){
                error='';
            }
        } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = 'ایمیل وارد شده معتبر نیست.';
            if(value.length ==0){
                error='';
            }
        } else if (name === "password" && value.length < 8) {
            error = 'رمز عبور باید حداقل 8 کاراکتر باشد';
            if(value.length ==0){
                error='';
            }
        }
        setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    };

    const handleLoginChange = (e) => {
        setError('');
        const { name, value } = e.target;
        setLoginData(prevData => ({ ...prevData, [name]: value }));

        // Validation
        let error = '';
        if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = 'ایمیل وارد شده معتبر نیست';
            if(value.length === 0){
                error='';
            }
        } else if (name === "password" && value.length < 8) {
            
            error = 'رمز عبور باید حداقل 8 کاراکتر باشد';
            if(value.length === 0){
                error='';
            }
        }
        setLoginErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    };

    const handleSignUpSubmit = async(e) => {
        e.preventDefault();
        if (Object.values(errors).some(error => error)) {
            return; // Prevent submission if there are errors
        }

        
        const check = await registerUser(signUpData.email, signUpData.email , signUpData.password, signUpData.password);
        if(check === 1){

            localStorage.setItem('dataUser', JSON.stringify(signUpData));
            localStorage.setItem('user', signUpData.name);
            localStorage.setItem('login', true);
            setIsSignUp(false);
        }

      
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(loginErrors).some(error => error)) {
            return; // Prevent submission if there are errors
        }

        const check = await loginUser(loginData.email, loginData.password);
        if(check === 1){
            alert('Login Sccessfully!');
            setError('');
            localStorage.setItem('user', loginData.email);
            localStorage.setItem('login', true);
            navigate('/home');
        }else{
           setError('ایمیل یا گذرواژه نادرست است');
        }
    };

    return (
        <div className="LoginBody">
            <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={handleSignUpSubmit}>
                        <h1 className="title-login">ایجاد حساب</h1>
                        <div className="creat-account">
                          
                                <input type="text" name="name" placeholder="نام کاربر" className="inp" onChange={handleSignUpChange} required  />
                                {errors.name && <p className="errorInput">{errors.name}</p>}
                            
                            
                            
                                <input type="text" name="userNumber" placeholder="شماره تماس" className="inp" onChange={handleSignUpChange} required />
                                {errors.userNumber && <p className="errorInput">{errors.userNumber}</p>}
                            
                            
                                <input type="email" name="email" placeholder="ایمیل" className="inp" onChange={handleSignUpChange}  required/>
                                {errors.email && <p className="errorInput">{errors.email}</p>}   
                            
                            

                                <input type="password" name="password" placeholder="رمز" className="inp" onChange={handleSignUpChange} required />
                                {errors.password && <p className="errorInput">{errors.password}</p>}
                        </div>
                        {error && <p className="errorInput" style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
                        <button type="submit" className='input-submit'>ثبت نام</button>
                    </form>
                </div>

                <div className="form-container sign-in-container">
                    <form onSubmit={handleLoginSubmit}>
                        <h1 className="title-login">ورود به حساب</h1>
                        <input type="text" name="email" placeholder="ایمیل*" className="inp" onChange={handleLoginChange} required />
                        {loginErrors.email && <p className="errorInput">{loginErrors.email}</p>}

                        <input type="password" name="password" placeholder="رمز*" className="inp" onChange={handleLoginChange} required/>
                        {loginErrors.password && <p className="errorInput">{loginErrors.password}</p>}

                        {error && <p style={{ color: "red", fontWeight: "bold", fontSize:"15px" }}>{error}</p>}
                        <a href="./forgot-password" className='forget'>گذرواژه خود را فراموش کردید؟</a>
                        <button type="submit" className='input-submit'>ورود</button>
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
