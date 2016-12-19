import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router'

class Lenovo extends React.Component {
    render() {
        return (
            <div>
      			Lenovo 系列
      			<br />
      			<Link to='/index/product/lenovo/1'> 产品1 </Link>
      			<Link to='/index/product/lenovo/2'> 产品2 </Link>
            <br />
            {this.props.children}
      		</div>
        );
    }
}

export default Lenovo;
