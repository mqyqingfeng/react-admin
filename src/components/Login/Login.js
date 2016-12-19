/*
* @Author: kevin
* @Date:   2016-12-19 11:20:19
* @Last Modified by:   kevin
* @Last Modified time: 2016-12-19 12:14:45
*/

'use strict';

import React, { PropTypes } from 'react';

import ReactDOM from 'react-dom';

import { Button, Form, Input, notification } from 'antd';

import { loginRequest } from '../../redux/actions/login';

import { connect } from 'react-redux';

import './login.scss';

import { loginFetch } from './model.js';

import { browserHistory } from 'react-router';

const createForm = Form.create;
const FormItem = Form.Item;

const contextTypes = {
    router: PropTypes.object.isRequired
}

function noop() {
    return false;
}

class Login extends React.Component {

    notify(type, message, description) {

        notification.destroy();

        switch (type) {
            case 'success':
                notification.success({
                    message: message,
                    description: description,
                });
                return;
            case 'error':
                notification.error({
                    message: message,
                    description: description,
                });
                return;
            case 'open':
            default:
                notification.open({
                    message: message,
                    description: description,
                });
        }

    }

    onPressEnter(e) {

        this.handleSubmit(e)

    }

    handleSubmit(e) {

        e.preventDefault();

        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                return;
            }

            loginFetch({
                    userName: values.userName,
                    password: values.password
            })
            .then(function(res) {
                if (res.status == 200) {
                    this.notify('success', '提示', '登陆成功');
                    localStorage.setItem('userData', JSON.stringify(res.data));
                    browserHistory.push('/index')
                        // this.context.router.replace('/index');
                } else {
                    this.notify('fail', '提示', '登陆失败');
                }
            }.bind(this))

        });

    }

    render() {

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            wrapperCol: { span: 16, offset: 4 }
        };

        return (
            <div className="login-wrap">
                <Form horizontal>
                    <p className="login-title">联想后台管理系统</p>
                    <FormItem {...formItemLayout} hasFeedback>

                        {getFieldDecorator('userName', {
                            rules: [{
                              required: true, message: '请填写用户名'
                            }],
                        })(
                            <Input
                                placeholder='请输入登录账号'
                                autoComplete="off"
                                onPressEnter={this.onPressEnter.bind(this)}
                            />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} hasFeedback>

                        {getFieldDecorator('password', {
                            rules: [{
                              required: true, whitespace: true, message: '请填写密码'
                            }],
                        })(
                            <Input
                                placeholder='请输入登录密码'
                                type='password'
                                autoComplete="off"
                                onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
                                onPressEnter={this.onPressEnter.bind(this)}
                            />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout}>
                      <Button type="primary" onClick={this.handleSubmit.bind(this)}>登录</Button>
                    </FormItem>
                </Form>
            </div>
        );

    }
}

Login.contextTypes = contextTypes;

function mapStateToProps(state) {
    return { login: state.login };
}

export default connect(mapStateToProps)(createForm()(Login));
