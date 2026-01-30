import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };
  }
  render() {
    const cates = this.state.categories.map((item) => {
      return (
        <li key={item._id} className="menu"><Link className='menu-brands' to={'/product/category/' + item._id}>{item.name}</Link></li>
      );
    });
    return (
      <div className="border-bottom">
        <div className="float-left">
          <ul className="menu">
          <img src='https://i.fbcd.co/products/resized/resized-750-500/06e2713728c9190fe23f234ce55afc990657c76afab56ca79eef992621d6e8c1.webp' width="100px" height="100px" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <li className="menu"><Link className='menu-home' to='/'>Home</Link></li>
            {cates}
          </ul>
        </div>
        <div className="float-right">
        <form className="search d-flex">
          <input type="search" placeholder="Enter keyword" className="keyword form-control me-2" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
          <input className='btn btn-primary' type="submit" value="Search" onClick={(e) => this.btnSearchClick(e)} />
        </form>
        </div>
        <div className="float-clear" />
      </div>
    );
  }
 // event-handlers
 btnSearchClick(e) {
  e.preventDefault();
  this.props.navigate('/product/search/' + this.state.txtKeyword);
}

  componentDidMount() {
    this.apiGetCategories();
  }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
}
export default withRouter(Menu);