import React, { Component } from 'react';
import { Layout, Menu, Icon, Avatar, Badge, Dropdown, Button } from 'antd';
import { ReactComponent as Logo } from './assets/logo.svg';

const { Header } = Layout;

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

class PageHeader extends Component {
  render() {
    return (
      <Header className="header">
        <Logo className="main__logo" />

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px', minWidth: '500px' }}
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
          <Button ghost className="main__button">
            <Icon type="flag" /> 4 часа 20 минут
          </Button>
          <Button ghost className="main__button">
            <Icon type="coffee" /> 0 минут
          </Button>

          <Dropdown overlay={menu}>
            <Badge count={1}>
              <Avatar shape="square" icon="user" />
            </Badge>
          </Dropdown>
        </div>
      </Header>
    );
  }
}

export default PageHeader;
