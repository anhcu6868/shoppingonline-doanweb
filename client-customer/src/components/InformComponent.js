import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

class Inform extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
            {this.context.token === '' ?
              <div><Link className='inform-login' to='/login'>Login</Link> | <Link className='inform-signup' to='/signup'>Sign-up</Link> | <Link className='inform-active' to='/active'>Active</Link></div>
              :
              <div>Hello <b>{this.context.customer.name}</b> | <Link className='inform-logout btn btn-danger' to='/home' onClick={() => this.lnkLogoutClick()}>Logout</Link> | <Link className='inform-myprofile' to='/myprofile'>My profile</Link> | <Link className='inform-myorders' to='/myorders'>My orders</Link></div>
            }
        </div>
        <div className="float-right">
            <button type="button" class="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path>
                  </svg>
                  <Link className='inform-mycart' to='/mycart'>My cart</Link> </button> have <b>{this.context.mycart.length}</b> items
            
          
        </div>
        <div className="float-clear" />
      </div>
    );
    
  }
   // event-handlers
   lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
}
export default Inform;