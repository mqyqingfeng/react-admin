import React from 'react';

import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import { navClick } from '../../redux/actions/menu.js';

import { Link, browserHistory } from 'react-router';

import routeConfig from './routeConfig.js';

import _ from 'lodash';

import { Menu, Icon, Switch } from 'antd';

const SubMenu = Menu.SubMenu;

require('./siderbar.scss');

class SiderBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    /**
     * 点击菜单栏跳转对应的路由
     * @param  {Object} e ant-design返回
     */
    linkTo(e) {

        this.setState({
            current: e.key,
        }, function() {

            /**
             * 修改顶部栏菜单名
             */
            let name = e.item.props.children;
            this.props.onNavChange(name);

            /**
             * 跳转对应路由
             */
            let current = this.state.current;

            // 根据key值查找对应路由
            let routeURI = _.result(_.find(routeConfig, function(item){
                return item.key == current;
            }), 'route')

            if (!!routeURI) {
                browserHistory.push(routeURI)
            }
            else {
                browserHistory.push('/index/user')
            }

        });

    }

    handleClick() {
        console.log(1);
    }

    render() {
        console.log('侧边栏组件被渲染了一次')
        return (
            <div className="siderbar">
                <h1 className="header-title" onClick={this.handleClick.bind(this)}>后台管理系统</h1>
                <Menu theme='dark' onClick={this.linkTo.bind(this)} style={{ width: 240 }} defaultOpenKeys={['user', 'product', 'product2']} selectedKeys={[this.state.current]} mode="inline">
                    <SubMenu key="user" title={<span><Icon type="mail" /><span>用户管理</span></span>}>
                        <Menu.Item key="user1">用户管理1</Menu.Item>
                        <Menu.Item key="user2">用户管理2</Menu.Item>
                    </SubMenu>
                    <SubMenu key="product" title={<span><Icon type="appstore" /><span>商品管理</span></span>}>
                        <Menu.Item key="product1">商品管理1</Menu.Item>
                        <SubMenu key="product2" title="商品管理2">
                            <Menu.Item key="product21">商品管理21</Menu.Item>
                            <Menu.Item key="product22">商品管理22</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );

    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        onNavChange: (menuName) => dispatch(navClick(menuName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiderBar);
