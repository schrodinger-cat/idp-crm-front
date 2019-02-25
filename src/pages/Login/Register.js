import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './Login.css';

class Register extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('rUserName', {
            rules: [{ required: true, message: 'Введите имя' }],
          })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Имя" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('rPassword', {
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
          {getFieldDecorator('rRePassword', {
            rules: [{ required: true, message: 'Введите пароль ещё раз' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Подтвердите пароль"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

Register = Form.create({ name: 'register' })(Register);

export default Register;
