import React from 'react';

import { Link } from 'react-router';

import fetch from 'UTIL/fetch.js';

import './product.scss';

class Product extends React.Component {

    render() {

        let { children } = this.props;

        return (
            <div className="product-wrap">
                <p>说明：打开调试工具，点击下面的产品类型，查看文件的加载</p>

                <div className="product-type-wrap">
                    产品类型：
                    <Link to="/index/product/lenovo" style={{marginRight: "20px"}}>Lenovo</Link>
                    <Link to="/index/product/think">Think</Link>
                </div>

                {this.props.children}

            </div>
        );

    }
}

export default Product;
