import React from 'react';


const Register = ({ routeChange }) => {
        return (
          <div className='screen'>
              <div className="login-page">
                  <div className='welcome-div'>
                      <p className='welcome-p'>Hoşgeldin!</p>
                      <p className='info-p'>Üyeliğini oluşturup merak edilen konularda fikirlerini paylaşmaya hazır mısın?</p>
                  </div>
                  <div className="form">
                      <form className="login-form">
                          <input type="text" placeholder="Kullanıcı Adı"/>
                          <input type="password" placeholder="Şifre"/>
                          <input type="email" placeholder="E-mail"/>
                          <button onClick={ routeChange}>kayıt ol</button>
                      </form>
                  </div>
              </div>
          </div>
        );
    }


export default Register;
