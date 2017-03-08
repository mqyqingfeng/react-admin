import React from 'react';

import { Link } from 'react-router'

class Lenovo extends React.Component {

    render() {

        return (
            <div>
      			你选择了 Lenovo 系列，请选择产品，查看如何获取路由中的参数

                <div className="product-list" style={{marginTop: '10px', 'marginBottom': '10px'}}>
                    <Link to="/index/product/lenovo/yoga" style={{marginRight: "10px"}}> YOGA </Link>
                    <Link to="/index/product/lenovo/savior" style={{marginRight: "10px"}}> 拯救者 </Link>
                    <Link to="/index/product/lenovo/xiaoxin"> 小新 </Link>
                </div>

                {this.props.children}

      		</div>
        );

    }

}

export default Lenovo;
