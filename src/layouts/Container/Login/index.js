import React, { PropTypes } from 'react';

import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import { browserHistory } from 'react-router';

import { Button, Form, Input, notification } from 'antd';

import './login.scss';

import * as fetch from './model.js';

import { loginRequest } from 'ACTIONS/login';

import { withNotify } from 'WITH/withNotify';

const createForm = Form.create;
const FormItem = Form.Item;

const contextTypes = {
    router: PropTypes.object.isRequired
}

function noop() {
    return false;
}

class Login extends React.Component {

    onPressEnter(e) {

        this.handleSubmit(e)

    }

    handleSubmit(e) {

        e.preventDefault();

        const { notify } = this.props;

        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                return;
            }

            fetch.fetchLogin({
                    userName: values.userName,
                    password: values.password
            })
            .then(res => {

                if (res.status == 200) {

                    notify('success', '提示', '登陆成功');

                    localStorage.setItem('userData', JSON.stringify(res.data));

                    browserHistory.push('/index')
                    // this.context.router.replace('/index');

                }
                else {
                   notify('error', '提示', '登陆失败');
                }

            })

        });

    }

    render() {

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            wrapperCol: { span: 16, offset: 4 }
        };

        return (
            <div className="login-container">
                <div className="login-wrap">
                    <Form horizontal>
                        <p className="login-title">后台管理系统</p>
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
            </div>
        );

    }
}

Login.contextTypes = contextTypes;

function mapStateToProps(state) {
    return { login: state.login };
}

export default connect(mapStateToProps)(createForm()(withNotify(Login)));
