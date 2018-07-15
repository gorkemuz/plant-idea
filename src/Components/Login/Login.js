import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
const Login = () => {
        return (
                <div className="login-page">
                    <div className='welcome-div'>
                        <p className='welcome-p'>Hoşgeldin!</p>
                        <p className='info-p'>Üyeliğini oluşturup merak edilen konularda fikirlerini paylaşmaya hazır mısın?</p>
                    </div>
                    <div className="form">
                        <form className="login-form">
                            <input type="text" placeholder="Kullanıcı Adı"/>
                            <input type="password" placeholder="Şifre"/>
                            <Link to='/home'><button>PLANT</button></Link>
                            <p className="message">Henüz Kayıt Olmadınız mı?  <Link to='/register'><label className='register-label' >Kayıt Ol</label></Link></p>
                        </form>
                    </div>
                </div>
    );}
    export default Login;
