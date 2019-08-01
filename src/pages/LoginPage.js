import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form, Icon, Input, Button, Checkbox, Row } from 'antd';
import { loginAction } from "../state/actions/AuthAction"

import "../styles/pages/login.scss"
class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            menuOpened: false
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.loginAction(values)
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            < React.Fragment >
                <div className="login-container">
                    <Row type="flex" justify="center" align="middle" >
                        <Form onSubmit={this.handleSubmit} className="login-form-row">
                            <Form.Item>
                                {getFieldDecorator('email', {
                                    rules: [
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ],
                                })(<Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="email"
                                    placeholder="E-Mail"
                                />)}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item style={{ marginBottom: 0 }}>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Remember me</Checkbox>)}

                            </Form.Item>
                            <Form.Item className="error-form-item" style={{ float: "left", marginBottom: 0 }}>
                                <span style={{ color: "red" }}>{this.props.state.loginError.message === "" ? '' : this.props.state.loginError.message}</span>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                  </Button>
                            </Form.Item>
                            {/* <Form.Item style={{ float: "right" }}>
                                Or <NavLink to="/registert">register now!</NavLink>
                            </Form.Item> */}
                        </Form>
                    </Row>
                </div>

            </React.Fragment >


        )
    }
}
const LoginForm = Form.create({ name: 'normal_login' })(LoginPage);

const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = dispatch => bindActionCreators({
    loginAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)