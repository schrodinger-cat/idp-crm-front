import React, { Component } from 'react';
import { Icon, Rate, Tag, Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';

import './TaskDetail.css';

class TaskDetail extends Component {
  state = {
    likes: 0,
    dislikes: 0,
    action: null,
  };

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  };

  render() {
    const { task } = this.props;
    const { likes, dislikes, action } = this.state;

    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon type="like" theme={action === 'liked' ? 'filled' : 'outlined'} onClick={this.like} />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon type="dislike" theme={action === 'disliked' ? 'filled' : 'outlined'} onClick={this.dislike} />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
      </span>,
      <span>Ответить</span>,
    ];

    return (
      <div>
        <div className="task__text">{task.description}</div>

        <Rate value={task.stars} />

        <div className="cards__time" style={{ marginBottom: '20px' }}>
          <Tag color="green">
            <Icon type="clock-circle" /> {task.estimate}
          </Tag>
          <Tag color="orange">
            <Icon type="clock-circle" /> {task.spend}
          </Tag>
        </div>

        <Comment
          actions={actions}
          author={<a>Han Solo</a>}
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />}
          content={
            <p>
              We supply a series of design principles, practical patterns and high quality design resources (Sketch and
              Axure), to help people create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />

        <Comment
          actions={actions}
          author={<a>Han Solo</a>}
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />}
          content={
            <p>
              We supply a series of design principles, practical patterns and high quality design resources (Sketch and
              Axure), to help people create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />

        <Comment
          actions={actions}
          author={<a>Han Solo</a>}
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />}
          content={
            <p>
              We supply a series of design principles, practical patterns and high quality design resources (Sketch and
              Axure), to help people create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
      </div>
    );
  }
}

export default TaskDetail;
