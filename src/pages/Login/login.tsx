import { FunctionComponent } from "react";
import { Navigate } from "react-router-dom";
import "./style.css";
import Subtract from "../../assets/login/subtract.svg"
import Frame from "../../assets/login/frame.svg"
import Frame1 from "../../assets/login/frame1.svg"
import Rectangle from "../../assets/login/rectangle-4@2x.png"
  
const Login: FunctionComponent = () => { 
  return ( 
    <div className="minimalism-login-page">
      <img
        className="minimalism-login-page-child"
        alt=""
        src={Rectangle}
      />
      <div className="welcome-parent">
        <b className="welcome">Welcome</b>
      </div>
      <div className="login-with-others-parent">
        <div className="login-with-others-container">
          <div>Forgot password?</div>
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