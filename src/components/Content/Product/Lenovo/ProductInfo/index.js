import React from 'react';
import ReactDOM from 'react-dom';

class ProductInfo extends React.Component {
    render() {

        let { params } = this.props;

        return (
            <div>
      			ProductInfo 编号 {params.productId}
      		</div>
        );
    }
}

export default ProductInfo;
