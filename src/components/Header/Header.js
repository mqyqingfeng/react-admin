import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { notification } from 'antd';

require('./header.scss');

const contextTypes = {
    router: PropTypes.object.isRequired
}

class Header extends React.Component {

    loginOut() {
        localStorage.clear();
        notification.destroy();
        this.context.router.replace('/login');
    }

    render() {

        return (
            <div className="header">
      			header-{this.props.nav.navText}
                <a href="javascript:void(0)" className="loginOut-btn" onClick={this.loginOut.bind(this)}>注销</a>
      		</div>
        );

    }
}

Header.contextTypes = contextTypes;

// const todoSelector = createSelector(
// 	state => state.nav.navText,
// 	navText => {
// 		console.log("计算了一次");
// 		console.log(navText);
// 		return navText + '1111';
// 	}
// )

const todoSelector = createSelector(
    state => state.nav,
    nav => {
        return nav;
    }
)

const mapStateToProps = (state, ownProps) => {
    return {
        nav: todoSelector(state),
        params: ownProps.params
    }
}

// function mapStateToProps(state) {
//   return {
//     nav: state.nav
//   }
// }

export default connect(mapStateToProps)(Header);
