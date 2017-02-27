import React from 'react';

import SelectProduct from './SelectProduct';

import SelectValue from './SelectValue';

class Redux extends React.Component {

    render() {

        return (
            <div style={{padding: '20px'}}>
            	<p style={{fontSize: '14px', marginBottom: '20px'}}>请选择产品类型，选择的值会通过redux传递到右边的组件，打开调试工具，查看logger记录</p>
      			<SelectProduct />
      			<SelectValue />
      		</div>
        );

    }
}

export default Redux;
