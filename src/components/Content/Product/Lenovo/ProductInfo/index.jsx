import React from 'react';

class ProductInfo extends React.Component {

    render() {

        let { params } = this.props;

        return (
            <div>
      			你选择的是 {params.productId}, 该数据来源于路由的参数
      		</div>
        );
    }

}

export default ProductInfo;
