import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import firebase, { app } from '../firebase/firebase';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: 'register',
    };
  }
  registerWithPassword = event => {
    event.preventDefault();
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const username = this.usernameInput.value;

    app
      .auth()
      .fetchSignInMethodsForEmail(email)
      .then(providers => {
        if (providers.length === 0) {
          /* ======== KAYIT OLMAMIŞ İSE ========= */

          return app
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(alert('Kayıt başarılı... Lütfen giriş yapın.'));
        } else if (providers.indexOf('password') === -1) {
          /* ======== FACEBOOK İLE BAĞLANMIŞ İSE ========= */
          alert('Lütfen farklı yollardan bağlanmayı deneyin');
        } else {
          /* ======== EĞER KAYIT OLMUŞ İSE ========= */

          alert('Bilgileriniz kayıtlı. Lütfen giriş yapın');
        }
      })
      .then(user => {
        if (user) {
          /*firebase.database().ref(`users/${user.user.uid}`).set({
          username: username,
          password:password,
          email:email
        });*/
          user.user.updateProfile({
            displayName: username,
          });
          console.log(firebase.auth().currentUser);
          this.setState({ redirect: 'login' });
        }
      })
      .catch(error => {
        alert('Lütfen tekrar deneyiniz');
      });
  };
  render() {
    /* ======== BAGLANTI BAŞARILI İSE YÖNLENDİR ======== */

    const sayi = '/';
    if (this.state.redirect === 'login') {
      this.direct = () => {
        return <Redirect to={sayi} />;
      };
    }

    return (
      <div className="screen">
        <div className="login-page">
          <div className="welcome-div">
            <p className="welcome-p">Hoşgeldin!</p>
            <p className="info-p">
              Üyeliğini oluşturup felsefi konularda fikirlerini paylaşmaya hazır
              mısın?
            </p>
          </div>
          <div className="form">
            <form className="login-form">
              <input
                type="text"
                placeholder="Kullanıcı Adı"
                ref={input => {
                  this.usernameInput = input;
                }}
              />
              <input
                type="password"
                placeholder="Şifre"
                ref={input => {
                  this.passwordInput = input;
                }}
              />
              <input
                type="email"
                placeholder="E-mail"
                ref={input => {
                  this.emailInput = input;
                }}
              />
              <button
                onClick={event => {
                  this.registerWithPassword(event);
                }}
              >
                kayıt ol
              </button>

              <p className="direct-login">kayıtlı isen</p>

              <Link to="/">
                <button className="direct-login-button">Giriş yap</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
