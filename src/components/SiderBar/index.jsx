import React from 'react';

import { Link, browserHistory } from 'react-router';

import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

const ACTIVE = { backgroundColor: '#108EE9' }

require('./siderbar.scss');

class SiderBar extends React.Component {

    handleClick = () => {

        browserHistory.push('/index')

    }

    render() {

        return (
            <div className="siderbar">
                <h1 className="header-title" onClick={this.handleClick}>后台管理系统</h1>
                <Menu
                    theme="dark"
                    style={{ width: 240 }}
                    defaultOpenKeys={['IndexPageManager', 'RouterManager']}
                    mode="inline"
                >
                    <SubMenu key="IndexPageManager" title={<span><Icon type="mail" /><span>功能演示</span></span>}>
                        <Menu.Item key="redux">
                            <Link to="/index/redux" activeStyle={ACTIVE}>Redux传递数据</Link>
                        </Menu.Item>
                        <Menu.Item key="fetch">
                            <Link to="/index/fetch" activeStyle={ACTIVE}>fetch加载数据</Link>
                        </Menu.Item>
                        <Menu.Item key="dynamicRoute">
                            <Link to="/index/product" activeStyle={ACTIVE}>动态路由加载</Link>
                        </Menu.Item>
                        <Menu.Item key="iconfont">
                            <Link to="/index/iconfont" activeStyle={ACTIVE}>使用字体图标</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="RouterManager" title={<span><Icon type="appstore" /><span>其他</span></span>}>
                        <Menu.Item key="notfound">
                            <Link to="/index/notfound" activeStyle={ACTIVE}>404页面</Link>
                        </Menu.Item>
                        <Menu.Item key="empty">
                            <Link to="/index/empty" activeStyle={ACTIVE}>空模板</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );

    }
}

export default SiderBar;
