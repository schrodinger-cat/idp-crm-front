import React, { Component } from 'react';
import { Layout, Menu, Icon, Avatar, Badge, Dropdown, Button, Tabs, Rate, Tag } from 'antd';
import './MainPage.css';
import { ReactComponent as Logo } from './assets/logo.svg';

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
            <h2>Invest progress</h2>

            <Tabs defaultActiveKey="2" className="main__tasks">
              <TabPane tab="К выполнению" key="1">
                <div className="cards">
                  <div className="cards__elem">
                    <div className="cards__title">Реализация страницы дерево структуры</div>
                    <Rate value={3} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 40 часов</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 10 часов 13 минут</Tag>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="В работе" key="2">
                <div className="cards">
                  <div className="cards__elem">
                    <div className="cards__title">Реализация страницы дерево структуры</div>
                    <Rate value={3} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 40 часов</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 10 часов 13 минут</Tag>
                    </div>
                  </div>

                  <div className="cards__elem">
                    <div className="cards__title">В историю переводов добавить на партнерки и рефералку описание как в таблице транзакции</div>
                    <Rate value={4} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 1 час</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 0 минут</Tag>
                    </div>
                  </div>

                  <div className="cards__elem">
                    <div className="cards__title">Кастомизация страницы подарки в админке </div>
                    <Rate value={3} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 4 часа</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 1 час 20 минут</Tag>
                    </div>
                  </div>

                  <div className="cards__elem">
                    <div className="cards__title">Реализация страницы дерево структуры</div>
                    <Rate value={5} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 4 часа</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 1 час 20 минут</Tag>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Тестирование" key="3">
                <div className="cards">
                  <div className="cards__elem">
                    <div className="cards__title">Реализация страницы дерево структуры</div>
                    <Rate value={3} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 40 часов</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 10 часов 13 минут</Tag>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Завершенные" key="4">
                <div className="cards">
                  <div className="cards__elem">
                    <div className="cards__title">Реализация страницы дерево структуры</div>
                    <Rate value={3} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 40 часов</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 10 часов 13 минут</Tag>
                    </div>
                  </div>
                </div>
              </TabPane>
            </Tabs>

            <h2>Sailspeak</h2>

            <Tabs defaultActiveKey="2" className="main__tasks">
              <TabPane tab="К выполнению" key="1">
                <div className="cards">
                  <div className="cards__elem">
                    <div className="cards__title">Реализация страницы дерево структуры</div>
                    <Rate value={3} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 40 часов</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 10 часов 13 минут</Tag>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="В работе" key="2">
                <div className="cards">
                  <div className="cards__elem">
                    <div className="cards__title">Реализация страницы дерево структуры</div>
                    <Rate value={3} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 40 часов</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 10 часов 13 минут</Tag>
                    </div>
                  </div>

                  <div className="cards__elem">
                    <div className="cards__title">В историю переводов добавить на партнерки и рефералку описание как в таблице транзакции</div>
                    <Rate value={4} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 1 час</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 0 минут</Tag>
                    </div>
                  </div>

                  <div className="cards__elem">
                    <div className="cards__title">Кастомизация страницы подарки в админке </div>
                    <Rate value={3} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 4 часа</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 1 час 20 минут</Tag>
                    </div>
                  </div>

                  <div className="cards__elem">
                    <div className="cards__title">Реализация страницы дерево структуры</div>
                    <Rate value={5} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 4 часа</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 1 час 20 минут</Tag>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Тестирование" key="3">
                <div className="cards">
                  <div className="cards__elem">
                    <div className="cards__title">Реализация страницы дерево структуры</div>
                    <Rate value={3} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 40 часов</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 10 часов 13 минут</Tag>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Завершенные" key="4">
                <div className="cards">
                  <div className="cards__elem">
                    <div className="cards__title">Реализация страницы дерево структуры</div>
                    <Rate value={3} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 40 часов</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 10 часов 13 минут</Tag>
                    </div>
                  </div>
                </div>
              </TabPane>
            </Tabs>

            <h2>Разное</h2>

            <Tabs defaultActiveKey="2" className="main__tasks">
              <TabPane tab="К выполнению" key="1">
                <div className="cards">
                  <div className="cards__elem">
                    <div className="cards__title">Реализация страницы дерево структуры</div>
                    <Rate value={3} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 40 часов</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 10 часов 13 минут</Tag>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="В работе" key="2">
                <div className="cards">
                  <div className="cards__elem">
                    <div className="cards__title">Реализация страницы дерево структуры</div>
                    <Rate value={3} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 40 часов</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 10 часов 13 минут</Tag>
                    </div>
                  </div>

                  <div className="cards__elem">
                    <div className="cards__title">В историю переводов добавить на партнерки и рефералку описание как в таблице транзакции</div>
                    <Rate value={4} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 1 час</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 0 минут</Tag>
                    </div>
                  </div>

                  <div className="cards__elem">
                    <div className="cards__title">Кастомизация страницы подарки в админке </div>
                    <Rate value={3} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 4 часа</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 1 час 20 минут</Tag>
                    </div>
                  </div>

                  <div className="cards__elem">
                    <div className="cards__title">Реализация страницы дерево структуры</div>
                    <Rate value={5} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 4 часа</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 1 час 20 минут</Tag>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Тестирование" key="3">
                <div className="cards">
                  <div className="cards__elem">
                    <div className="cards__title">Реализация страницы дерево структуры</div>
                    <Rate value={3} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 40 часов</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 10 часов 13 минут</Tag>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Завершенные" key="4">
                <div className="cards">
                  <div className="cards__elem">
                    <div className="cards__title">Реализация страницы дерево структуры</div>
                    <Rate value={3} />
                    <div className="cards__time">
                      <Tag color="green"><Icon type="clock-circle" /> 40 часов</Tag>
                      <Tag color="orange"><Icon type="clock-circle" /> 10 часов 13 минут</Tag>
                    </div>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </Content>
          <Footer className="main__footer">2019, IDP</Footer>
        </Layout>
      </div>
    );
  }
}

export default MainPage;
