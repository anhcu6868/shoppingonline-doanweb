import axios from 'axios';
import React, { Component } from 'react';

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtID: '',
      txtToken: ''
    };
  }
  render() {
    return (
      <div className="align-center">
         <form>
            <h2 className="text-center sign-up-text fw-bold">Active Account</h2>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">ID:</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.txtID} onChange={(e) => { this.setState({ txtID: e.target.value }) }}/>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Token:</label>
                <input type="text" class="form-control" id="exampleInputPassword1" value={this.state.txtToken} onChange={(e) => { this.setState({ txtToken: e.target.value }) }}/>
              </div>
              <input className='btn btn-primary' type="submit" value="Active" onClick={(e) => this.btnActiveClick(e)} />
          </form>
      </div>
    );
  }
  // event-handlers
  btnActiveClick(e) {
    e.preventDefault();
    const id = this.state.txtID;
    const token = this.state.txtToken;
    if (id && token) {
      this.apiActive(id, token);
    } else {
      alert('Please input id and token');
    }
  }
  // apis
  apiActive(id, token) {
    const body = { id: id, token: token };
    axios.post('/api/customer/active', body).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
      } else {
        alert('SORRY BABY!');
      }
    });
  }
}
export default Active;