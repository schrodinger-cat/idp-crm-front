import React, { Component } from 'react';
import { Layout, Icon, Tabs, Rate, Tag } from 'antd';
import './MainPage.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter.js';

import Projects from './components/Projects/Projects';

import projects from './data.json';

const { Content } = Layout;

// function Projects(props) {
//   return props.list.map(project => {
//     return (
//       <div key={project.id}>
//         <h2>{project.project}</h2>
//         <Tabs defaultActiveKey="2" className="main__tasks">
//           <TabPane tab="К выполнению" key="1">
//             <div className="cards">
//               <Tasks list={project.tasks.filter(e => e.status == 1)} />
//             </div>
//           </TabPane>
//           <TabPane tab="В работе" key="2">
//             <div className="cards">
//               <Tasks list={project.tasks.filter(e => e.status == 2)} />
//             </div>
//           </TabPane>
//           <TabPane tab="Тестирование" key="3">
//             <div className="cards">
//               <Tasks list={project.tasks.filter(e => e.status == 3)} />
//             </div>
//           </TabPane>
//           <TabPane tab="Завершенные" key="4">
//             <div className="cards">
//               <Tasks list={project.tasks.filter(e => e.status == 4)} />
//             </div>
//           </TabPane>
//         </Tabs>
//       </div>
//     );
//   });
// }

// function Tasks(props) {
//   return props.list.map(task => {
//     return (
//       <div className="cards__elem" key={task.id}>
//         <div className="cards__title" title={task.name}>{task.name}</div>
//         <Rate value={task.stars} />
//         <div className="cards__time">
//           <Tag color="green">
//             <Icon type="clock-circle" /> {task.estimate}
//           </Tag>
//           <Tag color="orange">
//             <Icon type="clock-circle" /> {task.spend}
//           </Tag>
//         </div>
//       </div>
//     )
//   });
// }

class MainPage extends Component {
  state = {
    list: projects,
  };

  render() {
    const { list } = this.state;

    return (
      <div>
        <Layout>
          <PageHeader/>

          <Content className="main__content">
            <Projects list={list} />
          </Content>

          <PageFooter/>
        </Layout>
      </div>
    );
  }
}

export default MainPage;
