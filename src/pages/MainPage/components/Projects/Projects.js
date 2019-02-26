import React, { Component } from 'react';
import { Tabs } from 'antd';

import Tasks from '../Tasks/Tasks';

const TabPane = Tabs.TabPane;

class Projects extends Component {
  constructor(props) {
    super();
  }

  openTask = e => {
    console.log(e.target.dataset.id);
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
                <Tasks list={project.tasks.filter(e => e.status === 1)} onClick={this.openTask} />
              </TabPane>
              <TabPane tab="В работе" key="2">
                <Tasks list={project.tasks.filter(e => e.status === 2)} onClick={this.openTask} />
              </TabPane>
              <TabPane tab="Тестирование" key="3">
                <Tasks list={project.tasks.filter(e => e.status === 3)} onClick={this.openTask} />
              </TabPane>
              <TabPane tab="Завершенные" key="4">
                <Tasks list={project.tasks.filter(e => e.status === 4)} onClick={this.openTask} />
              </TabPane>
            </Tabs>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
