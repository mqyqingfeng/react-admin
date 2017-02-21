import React, { PropTypes } from 'react';

import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import classNames from 'classnames';

import _ from 'lodash';

import './componentName.scss';

import * as fetch from './model.js';

import { loginSuccess } from '../actions/action.js';

const propTypes = {
    optionalString: PropTypes.string,
    requiredString: PropTypes.string.isRequired,
    optionalNumber: PropTypes.number,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalArray: PropTypes.array,
    optionalObject: PropTypes.object,
    optionalUnion: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    optionalEnum: PropTypes.oneOf(['type1', 'type2']),
    optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
    optionalObjectOf: PropTypes.objectOf(PropTypes.number),
    optionalObjectWithShape: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
    })
};

const defaultProps = {
    type: 'normal'
};

class ComponentName extends React.Component {

    constructor() {

        super();

        this.state = {
            // 每个state字段都必须添加注释，解释作用和取值范围
            example: Immutable.Map({
                // type
                type: 'num',
                // num
                num: 10
            })
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        fetch.fetchLogin({
           // 请求的数据
        })
        .then((res) => {

            if (res.status_code == 200) {

                this.setState({
                    example: this.state.relatedOptions.update('num', v => v + 1)
                }, () => {
                    this.props.dpLoginSuccess(this.state.example.get('num'))
                });

            }
            else {

                // do something

            }

        })

    }

    render() {

        let { example1 } = this.props;

        let btnWrapClass = classNames(variables1, variables2 + 'fix', {
            'btnWrap': variables3,
        });

        return (
            <div className="componentName-wrap">
                <div className={ btnWrapClass }>
                    <span>{ this.state.addModel.get('type') }</span>
                    <button onClick={this.handleClick}>{ example1 }</button>
                </div>
            </div>
        );
    }
}

ComponentName.propTypes = propTypes;

ComponentName.defaultProps = defaultProps;

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        dpLoginSuccess: (num) => dispatch(loginSuccess(num)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentName);
