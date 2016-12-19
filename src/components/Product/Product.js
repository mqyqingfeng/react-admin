import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router';

import fetch from 'UTIL/fetch.js';

class Product extends React.Component {

    render() {
        let { children, params } = this.props;

        return (
            <div>
              产品列表：
              <br />
              <Link to='/index/product/think'>think</Link>
              <br />
              <Link to='/index/product/lenovo'>lenovo</Link>
              <br />
              {this.props.children}
            </div>
        );

    }
}

export default Product;
