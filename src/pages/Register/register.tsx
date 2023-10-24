import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {

  Form,
  Input,

} from 'antd';

interface AppState {
  register: string;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { register: 'show col-lg-6 px-lg-4' };
  }

  showregister = () => {
    this.setState({ register: 'show col-lg-6 px-lg-4' });
  };

  handleRegister = () => {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    alert(`Registration successful for ${username}`);
    this.setState({ register: 'hide' }); // Hiding the registration form after successful registration
  };

  render() {
    return (
      <div className="App">
        <div className="page-holder align-items-center py-4 bg-gray-100 vh-100">
          <div className="container">
            <div className="row align-items-center">
              <div className={this.state.register}>
                <div className="card">
                  <div className="card-header px-lg-5">
                    <div className="card-heading text-primary">Register</div>
                  </div>
                  <div className="card-body p-lg-5">
                    <h3 className="mb-4">Get started</h3>
                    <p className="text-muted text-sm mb-5">
                      Welcome to the world of endless possibilities and opportunities
                    </p>
                    <form action="index.html">
                      <div className="form-floating mb-3">
                        <input className="form-control" id="floatingInput" type="email" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Email address</label>
                          <Form.Item
                              rules={[
                                {
                                  type: 'email',
                                  message: 'The input is not valid E-mail!',
                                },
                                  {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                  },
                                ]}
                              >
                              </Form.Item>
                      </div>
                      <div className="form-floating mb-3">
                        <input className="form-control" id="floatingPassword" type="password" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Password</label>
                          <Form.Item
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your password!',
                                },
                              ]}
                              hasFeedback
                            >
                            </Form.Item>
                      </div>
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" name="agree" id="agree" />
                        <label className="form-check-label" htmlFor="agree">
                          I agree with the <a href="#">Terms & Conditions</a>.
                        </label>
                      </div>
                      <div className="form-group">
                        <button className="btn btn-primary" id="register" type="button" name="registerSubmit" onClick={this.handleRegister}>
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer px-lg-5 py-lg-4">
                    <div className="text-sm text-muted">
                      Already have an account? <a onClick={this.showregister}>Login</a>.
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

export default App;
