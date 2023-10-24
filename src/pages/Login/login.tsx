import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {
  Form,
  Input,
} from 'antd';

interface AppState {
  login: string;
}
  
class Login extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { login: 'show col-lg-6 px-lg-4' };
  }

  render() {
    return (
      <div className="App">
        <div className="page-holder align-items-center py-4 bg-gray-100 vh-100">
          <div className="container">
            <div className="row align-items-center">
              <div className={this.state.login}>
                <div className="card">
                  <div className="card-body p-lg-5">
                    <h3 className="mb-4">Login</h3>
                    <form action="index.html">
                      <div className="form-floating mb-3">
                        <input className="form-control" id="floatingInput" type="email" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Email address</label>
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                      <div className="form-floating mb-3">
                        <input className="form-control" id="floatingPassword" type="password" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Password</label>
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                        <a href="#">Forget Password</a>
                      <div className="form-group">
                        <button className="btn btn-primary" id="login" type="button" name="loginSubmit" >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer px-lg-5 py-lg-4">
                    <div className="text-sm text-muted">
                      First time ? <a>Register</a>.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center text-primary">
                <img
                  className="img-fluid mb-4"
                  width="300"
                  src="https://therichpost.com/wp-content/uploads/2021/06/login_page_image.png"
                  alt=""
                  style={{ transform: "rotate(10deg)" }}
                />
                <h1 className="mb-4">
                </h1>
                <p className="lead text-muted">
                  Welcome to the world of endless possibilities and opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;