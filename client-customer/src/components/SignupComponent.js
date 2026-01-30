import axios from 'axios';
import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: '',
      txtName: '',
      txtPhone: '',
      txtEmail: ''
    };
  }
  render() {
    return (
      <div className="align-center">
        <form>
              <h2 className="text-center sign-up-text fw-bold">Sign-up</h2>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Username:</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }}/>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password:</label>
                <input type="password" class="form-control" id="exampleInputPassword1" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }}/>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Name:</label>
                <input type="text" class="form-control" id="exampleInputPassword1" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }}/>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Phone:</label>
                <input type="tel" class="form-control" id="exampleInputPassword1" value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }}/>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Email:</label>
                <input type="email" class="form-control" id="exampleInputPassword1" value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }}/>
              </div>

              <input className='btn btn-primary' type="submit" value="Sign-up" onClick={(e) => this.btnSignupClick(e)} />
          </form>
      </div>
    );
  }
  // event-handlers
  btnSignupClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    const name = this.state.txtName;
    const phone = this.state.txtPhone;
    const email = this.state.txtEmail;
    if (username && password && name && phone && email) {
      const account = { username: username, password: password, name: name, phone: phone, email: email };
      this.apiSignup(account);
    } else {
      alert('Please input username and password and name and phone and email');
    }
  }
  // apis
  apiSignup(account) {
    axios.post('/api/customer/signup', account).then((res) => {
      const result = res.data;
      alert(result.message);
    });
  }
}
export default Signup;