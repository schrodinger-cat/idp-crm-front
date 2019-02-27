import React, { Component } from 'react';
import { Icon, Rate, Tag } from 'antd';

class Tasks extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { list } = this.props;

    return (
      <div className="cards">
        {list.map(task => (
          <div className="cards__elem" key={task.id}>
            <div className="cards__title" title={task.name} onClick={this.props.onOpenTask} data-id={task.id}>
              {task.name}
            </div>
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
        ))}
      </div>
    );
  }
}

export default Tasks;
