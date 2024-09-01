import React, { useState } from 'react';
import './App.css';

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Referral ID" />
          <input type="text" placeholder="Username" />
          <input type="tel" placeholder="Phone Number" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <input type="text" placeholder="Address" />
          <button type="button">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>LOGIN</h1>

          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button type="button">LOGIN</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of the site's features</p>
            <button className="hidden" id="login" onClick={handleLoginClick}>LOGIN</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of the site's features</p>
            <button className="hidden" id="register" onClick={handleRegisterClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
