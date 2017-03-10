import React from 'react';

import { Select } from 'antd';

import { connect } from 'react-redux';

import { selectProduct } from 'ACTIONS/selectProduct'

const Option = Select.Option;

class SelectProduct extends React.Component {

    handleChange = (productValue) => {

        this.props.onSelectProduct(productValue)

    }

    render() {

        return (
            <div style={{float: 'left', marginRight: '100px'}}>
                <p>这是组件1</p>
      			<Select defaultValue="请选择" style={{ width: 120,marginTop: '10px' }} onChange={this.handleChange}>
      			 	<Option value="拯救者">拯救者</Option>
      			  	<Option value="小新">小新</Option>
      			  	<Option value="YOGA">YOGA</Option>
      			</Select>
      		</div>
        );

    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        onSelectProduct: (productValue) => dispatch(selectProduct(productValue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectProduct);
