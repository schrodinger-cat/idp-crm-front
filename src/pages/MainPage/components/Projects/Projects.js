import React, { Component } from 'react';
import { Tabs } from 'antd';

import Tasks from '../Tasks/Tasks';

const TabPane = Tabs.TabPane;

class Projects extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map(project => (
          <div key={project.id}>
            <h2>{project.project}</h2>
            <Tabs defaultActiveKey="2" className="main__tasks">
              <TabPane tab="К выполнению" key="1">
                <Tasks list={project.tasks.filter(e => e.status === 1)} onOpenTask={this.props.onOpenTask} />
              </TabPane>
              <TabPane tab="В работе" key="2">
                <Tasks list={project.tasks.filter(e => e.status === 2)} onOpenTask={this.props.onOpenTask} />
              </TabPane>
              <TabPane tab="Тестирование" key="3">
                <Tasks list={project.tasks.filter(e => e.status === 3)} onOpenTask={this.props.onOpenTask} />
              </TabPane>
              <TabPane tab="Завершенные" key="4">
                <Tasks list={project.tasks.filter(e => e.status === 4)} onOpenTask={this.props.onOpenTask} />
              </TabPane>
            </Tabs>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
