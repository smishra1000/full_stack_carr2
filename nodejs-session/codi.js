import * as React from "react";
import { render } from "react-dom";
import "./styles.css";

class Buttons extends React.Component {

  state = {
    hasLiked: false,
    hasDisliked: false,
    like: 100,
    disLike: 25
  }

  handleLike = () => {
    if(!this.state.hasDisliked) {
      this.setState({
        hasLiked: !this.state.hasLiked
      });
    }else {
      this.setState({
        hasLiked: true,
        hasDisliked: false
      });
    }
  }

   handleDislike = () => {
    if(!this.state.hasLiked) {
      this.setState({
        hasDisliked: !this.state.hasDisliked
      });
    }else {
      this.setState({
        hasLiked: false,
        hasDisliked: true
      });
    }
  }

  render() {
    const { hasDisliked, hasLiked } = this.state;
    const classLikeButton = `like-button ${hasLiked ? 'liked': ''}`;
    const classDisLikeButton = `dislike-button ${hasDisliked ? 'disliked': ''}`;

    return (
      <div>
        <button className={classLikeButton} onClick={this.handleLike}>
          Like |
          <span className="likes-counter">
            {this.state.hasLiked ? this.state.like + 1 : this.state.like}
          </span>
        </button>
        <button className={classDisLikeButton} onClick={this.handleDislike}>
          Dislike |
          <span className="dislikes-counter">
            {this.state.hasDisliked ? this.state.disLike + 1 : this.state.disLike}
          </span>
        </button>
      </div>
    );
  }
}

function App() {
  return <Buttons />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);


2.----------------------------------------------------------------------------------------------------------

import cx from "classnames";
import { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputValue: ""
    };
  }

  addTask = () => {
    if (this.state.inputValue.trim().length === 0) return;

    const newTasks = this.state.tasks;
    newTasks.push({
      name: this.state.inputValue,
      isComplete: false
    });

    this.setState({
      tasks: newTasks,
      inputValue: ""
    });
  };

  toggleTask = (index) => {
    const newTasks = this.state.tasks;
    newTasks[index].isComplete = !newTasks[index].isComplete;
    this.setState({
      tasks: newTasks
    });
  };

  onInputChange = (e) => {
    const { value } = e.target;
    this.setState({
      inputValue: value
    });
  };

  render() {
    const remainingCount = this.state.tasks.filter((task) => !task.isComplete)
      .length;
    return (
      <>
        <div>
          <h2>Todo List</h2>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.onInputChange}
          />
          <button onClick={this.addTask}>Add</button>
          <p className="task-counter">{`${remainingCount} remaining out of ${this.state.tasks.length} tasks`}</p>
          <ul>
            {this.state.tasks.map((task, index) => {
              const className = cx({
                "is-done": task.isComplete
              });
              return (
                <li
                  key={index}
                  className={className}
                  onClick={() => this.toggleTask(index)}
                >
                  {task.name}
                </li>
              );
            })}
          </ul>
        </div>
        <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
      </>
    );
  }
}

