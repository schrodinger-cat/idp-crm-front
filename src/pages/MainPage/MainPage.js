import React, { Component } from 'react';
import { Layout, Drawer } from 'antd';
import './MainPage.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import TaskDetail from './components/TaskDetail/TaskDetail';

import Projects from './components/Projects/Projects';

import projects from './data.json';

const { Content } = Layout;

class MainPage extends Component {
  state = {
    list: projects,
    projectDetail: false,
    currentTask: null,
  };

  openTask = e => {
    const { list } = this.state;
    list.forEach((elem, index) => {
      console.log(elem);
      let childIndex = elem.tasks.map(task => task.id).indexOf(e.target.dataset.id);

      if (childIndex !== -1) {
        this.setState({ currentTask: list[index].tasks[childIndex] });
      }
    });

    if (this.state.currentTask) {
      this.setState({ projectDetail: true });
    }
  };

  closeProjectDetail = () => {
    this.setState({ projectDetail: false });
  };

  render() {
    const { list } = this.state;

    return (
      <div>
        <Layout>
          <PageHeader />
          <Drawer
            title={this.state.currentTask ? this.state.currentTask.name : ''}
            placement="right"
            width={600}
            closable={false}
            onClose={this.closeProjectDetail}
            visible={this.state.projectDetail}
            destroyOnClose={true}
          >
            <TaskDetail task={this.state.currentTask} />
          </Drawer>

          <Content className="main__content">
            <Projects list={list} onOpenTask={this.openTask} />
          </Content>

          <PageFooter />
        </Layout>
      </div>
    );
  }
}

export default MainPage;
