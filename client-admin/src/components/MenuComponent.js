import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';

class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="border-bottom">
      
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <img src='https://i.fbcd.co/products/resized/resized-750-500/06e2713728c9190fe23f234ce55afc990657c76afab56ca79eef992621d6e8c1.webp' width="120px" height="100px" alt='logo'/>
            <a class="navbar-brand" href="#">WorldWatch</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"><Link className='nav-home' to='/admin/home'>Home</Link></a>
                </li>
                
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Option
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"><Link className='dropdown-item' to='/admin/category'>Category</Link></a></li>
                    <li><a class="dropdown-item" href="#"><Link className='dropdown-item' to='/admin/product'>Product</Link></a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#"><Link className='dropdown-item' to='/admin/order'>Order</Link></a></li>
                    <li><a class="dropdown-item" href="#"><Link className='dropdown-item' to='/admin/customer'>Customer</Link></a></li>
                  </ul>
                </li>
                
              </ul>
              <div className="float-right">
                Hello <b>{this.context.username}</b> | <Link className='btn btn-danger' to='/admin/home' onClick={() => this.lnkLogoutClick()}>Logout</Link>
                
              </div>
            </div>
          </div>
      </nav>
      <div className="float-clear" />
    </div>

    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}
export default Menu;