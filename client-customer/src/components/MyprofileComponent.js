import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

class Myprofile extends Component {
  static contextType = MyContext; // using this.context to access global state
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
    if (this.context.token === '') return (<Navigate replace to='/login' />);
    return (
      <div className="align-center">
        <form>
              <h2 className="text-center sign-up-text fw-bold">My Profile</h2>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Username:</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} />
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

              <input className='btn btn-primary' type="submit" value="Update" onClick={(e) => this.btnUpdateClick(e)} />
          </form>
      </div>
    );
  }
  componentDidMount() {
    if (this.context.customer) {
      this.setState({
        txtUsername: this.context.customer.username,
        txtPassword: this.context.customer.password,
        txtName: this.context.customer.name,
        txtPhone: this.context.customer.phone,
        txtEmail: this.context.customer.email
      });
    }
  }
  // event-handlers
  btnUpdateClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    const name = this.state.txtName;
    const phone = this.state.txtPhone;
    const email = this.state.txtEmail;
    if (username && password && name && phone && email) {
      const customer = { username: username, password: password, name: name, phone: phone, email: email };
      this.apiPutCustomer(this.context.customer._id, customer);
    } else {
      alert('Please input username and password and name and phone and email');
    }
  }
  // apis
  apiPutCustomer(id, customer) {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.put('/api/customer/customers/' + id, customer, config).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
        this.context.setCustomer(result);
      } else {
        alert('SORRY BABY!');
      }
    });
  }
}
export default Myprofile;