import React from 'react'; 
import { FunctionComponent } from "react";
import "./style.css";
import Subtract from "../../assets/login/subtract.svg"
import Frame from "../../assets/login/frame.svg"
import Frame1 from "../../assets/login/frame1.svg"
  
const Login: FunctionComponent = () => { 
  return ( 
    <div className="minimalism-login-page">
      <img
        className="minimalism-login-page-child"
        alt=""
        src="/rectangle-4@2x.png"
      />
      <div className="welcome-parent">
        <b className="welcome">Welcome</b>
      </div>
      <div className="login-with-others-parent">
        <div className="login-with-others-container">
          <a>Forgot password?</a>
        </div>
        <img className="subtract-icon" alt="" src={Subtract} />
      </div>
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="password">Password</div>
        <img className="frame-icon" alt="" src={Frame} />
      </div>
      <div className="rectangle-group">
        <div className="group-child" />
        <div className="password">Username</div>
        <img className="frame-icon" alt="" src={Frame1} />
      </div>
      <div className="rectangle-container">
        <div className="group-inner" />
        <b className="next">LOGIN</b>
      </div>
    </div>
  ); 
}; 

export default Login;