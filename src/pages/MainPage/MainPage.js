import React, { Component } from 'react';
import { Layout, Menu, Icon, Avatar, Badge, Dropdown } from 'antd';
import './MainPage.css';
import { ReactComponent as Logo } from './assets/logo.svg';

const { Header, Footer, Content } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      <Icon type="user" />
      Профиль
    </Menu.Item>
    <Menu.Item>
      <Icon type="setting" />
      Настройки
    </Menu.Item>
    <Menu.Item>
      <Icon type="logout" />
      Выйти
    </Menu.Item>
  </Menu>
);

class MainPage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header">
            <Logo className="main__logo" />

            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px', minWidth: '500px' }}
              inlineCollapsed={false}
            >
              <Menu.Item key="1">
                <Icon type="folder" /> Проекты
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="bar-chart" /> Стратистика
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="wallet" />
                Финансовые операции
              </Menu.Item>
            </Menu>

            <div className="header__side">
              <Dropdown overlay={menu}>
                <Badge count={1}>
                  <Avatar shape="square" icon="user" />
                </Badge>
              </Dropdown>
            </div>
          </Header>
          <Content />
          <Footer className="main__footer">2019, IDP</Footer>
        </Layout>
      </div>
    );
  }
}

export default MainPage;
