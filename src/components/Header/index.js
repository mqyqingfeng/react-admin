import React from 'react';

import { notification } from 'antd';

import { browserHistory } from 'react-router';

require('./header.scss');

class Header extends React.PureComponent {

    constructor(props) {

        super(props);

        this.loginOut = this.loginOut.bind(this);

    }

    loginOut() {

        localStorage.clear();

        notification.destroy();

        browserHistory.push('/login')

    }

    render() {
        return (
            <div className="header">
                <a href="javascript:void(0)" className="loginOut-btn" onClick={this.loginOut}>注销</a>
            </div>
        );

    }
}

export default Header;
