import React, { Component } from 'react';
import { Row, Col, Form, Icon, Input, Button, Checkbox, Drawer } from 'antd';
import Register from './Register.js';
import 'antd/dist/antd.css';
import './Login.css';

class Login extends Component {
  state = {
    rerister: false,
    isLogged: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  openRegisterWindow = e => {
    e.preventDefault();

    this.setState({ register: true });
  };

  onCloseRegister = () => {
    this.setState({ register: false });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Drawer
          title="Регистрация"
          placement="right"
          width={400}
          closable={false}
          onClose={this.onCloseRegister}
          visible={this.state.register}
          destroyOnClose={true}
        >
          <Register />
        </Drawer>

        <Row type="flex" justify="center">
          <Col span={5} className="login">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <h2>Войти</h2>
              <Form.Item>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Введите имя' }],
                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Имя" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Введите пароль' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Пароль"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>Запомнить меня</Checkbox>)}
                <a className="login-form-forgot" href="#">
                  Забыли пароль?
                </a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Войти
                </Button>
                Или{' '}
                <a href="#" onClick={this.openRegisterWindow}>
                  зарегистрироваться
                </a>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

Login = Form.create({ name: 'normal_login' })(Login);

export default Login;
