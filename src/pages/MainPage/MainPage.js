import React, { Component } from 'react';
import { Layout, Menu, Icon, Avatar, Badge, Dropdown, Button, Tabs, Rate, Tag } from 'antd';
import './MainPage.css';
import { ReactComponent as Logo } from './assets/logo.svg';

import projects from './data.json';

const { Header, Footer, Content } = Layout;
const TabPane = Tabs.TabPane;

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

function Projects(props) {
  return props.list.map(project => {
    return (
      <div key={project.id}>
        <h2>{project.project}</h2>
        <Tabs defaultActiveKey="2" className="main__tasks">
          <TabPane tab="К выполнению" key="1">
            <div className="cards">
              <Tasks list={project.tasks.filter(e => e.status == 1)} />
            </div>
          </TabPane>
          <TabPane tab="В работе" key="2">
            <div className="cards">
              <Tasks list={project.tasks.filter(e => e.status == 2)} />
            </div>
          </TabPane>
          <TabPane tab="Тестирование" key="3">
            <div className="cards">
              <Tasks list={project.tasks.filter(e => e.status == 3)} />
            </div>
          </TabPane>
          <TabPane tab="Завершенные" key="4">
            <div className="cards">
              <Tasks list={project.tasks.filter(e => e.status == 4)} />
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  });
}

function Tasks(props) {
  return props.list.map(task => {
    return (
      <div className="cards__elem" key={task.id}>
        <div className="cards__title" title={task.name}>{task.name}</div>
        <Rate value={task.stars} />
        <div className="cards__time">
          <Tag color="green">
            <Icon type="clock-circle" /> {task.estimate}
          </Tag>
          <Tag color="orange">
            <Icon type="clock-circle" /> {task.spend}
          </Tag>
        </div>
      </div>
    )
  });
}

class MainPage extends Component {
  state = {
    list: projects,
  };

  render() {
    const { list } = this.state;

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
          <Content className="main__content">
            <Projects list={list} />
          </Content>
          <Footer className="main__footer">2019, IDP</Footer>
        </Layout>
      </div>
    );
  }
}

export default MainPage;
