import React from 'react';

import { Button } from 'antd';

import * as fetch from './model.js';

import { withNotify } from 'WITH/withNotify';

class Fetch extends React.Component {

	fetchExample = () => {

		const {notify} = this.props;

		fetch.fetchLogin({
			userName: 'userName',
			password: 'password'
		})
		.then(res => {

		    if (res.status == 200) {

		    	 notify('success', '提示', '请求数据成功');

		    }
		    else {
		        notify('error', '提示', res.message);
		    }

		})

	}

    render() {

        return (
            <div style={{padding: '20px'}}>
            	<p style={{fontSize: '14px'}}>说明：打开调试工具，点击查看</p>
      			<Button
      				type="primary"
      				onClick={this.fetchExample}
      				style={{marginTop: '20px'}}
      			>
      				点击请求接口
      			</Button>
      		</div>
        );

    }
}

export default withNotify(Fetch);
