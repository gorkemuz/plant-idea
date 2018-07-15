import React from 'react';
import './Login.css';

const Login = ({ routeChange, routeSwitch }) => {
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
                            <button onClick={routeChange}>giris yap</button>
                            <p className="message">Henüz Kayıt Olmadınız mı?  <label className='register-label' onClick={routeSwitch}>Kayıt Ol</label></p>
                        </form>
                    </div>
                </div>
    );}
    export default Login;
