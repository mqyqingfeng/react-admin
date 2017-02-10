import React from 'react';

import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import { Link, browserHistory } from 'react-router';

import _ from 'lodash';

import { Menu, Icon, Switch } from 'antd';

const SubMenu = Menu.SubMenu;

const ACTIVE = { backgroundColor: '#108EE9' }

require('./siderbar.scss');

class SiderBar extends React.Component {

    constructor(props) {

        super(props);

    }

    handleClick() {

        browserHistory.push('/index/user')

    }

    render() {

        return (
            <div className="siderbar">
                <h1 className="header-title" onClick={this.handleClick.bind(this)}>后台管理系统</h1>
                <Menu
                    theme='dark'
                    style={{ width: 240 }}
                    defaultOpenKeys={['IndexPageManager', 'RouterManager']}
                    mode="inline"
                >
                    <SubMenu key="IndexPageManager" title={<span><Icon type="mail" /><span>首页管理</span></span>}>
                        <Menu.Item key="WelcomePage">
                            <Link to="/index/user" activeStyle={ACTIVE}>欢迎页面</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="RouterManager" title={<span><Icon type="appstore" /><span>路由管理</span></span>}>
                        <Menu.Item key="DynamicRouter">
                            <Link to="/index/product" activeStyle={ACTIVE}>动态路由加载</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );

    }
}

export default SiderBar;
