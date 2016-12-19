/*
 * @Author: kevin
 * @Date:   2016-12-19 11:17:07
 * @Last Modified by:   kevin
 * @Last Modified time: 2016-12-19 12:15:21
 */

'use strict';

import React, { PropTypes } from 'react';

import ReactDOM from 'react-dom';

import './Example.scss';

import * as fetch from './model.js';

const propTypes = {
	type: PropTypes.oneOf(['success', 'normal']),
	onClick: PropTypes.func,
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string
};

const defaultProps = {
    type: 'normal'
};

class ComponentName extends React.Component {

    handleClick() {}

    render() {
        let { className, type, children, ...other } = this.props;

        const classes = classNames(className, 'prefix-button', 'prefix-button-' + type);

        return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>;
    }
}

ComponentName.propTypes = propTypes;
ComponentName.defaultProps = defaultProps;

export default ComponentName;
