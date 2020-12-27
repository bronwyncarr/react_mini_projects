import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoData from "./TodoData";
import Heading from "./components/Heading";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: TodoData,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  // passed id of item to have checkbox flipped.
  // maps through entire todoData array and looks for item with id matching to the one passes in.
  // will then flip the value true/false of that completed key: value.
  // saves to a new array called updatedTodos and sets that to state.
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todoData.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return {
        todoData: updatedTodos,
      };
    });
  }

  handleClearClick() {
    this.setState((prevState) => {
      const clearedTodos = prevState.todoData.map((todo) => {
        return { ...todo, completed: false };
      });
      return { todoData: clearedTodos };
    });
  }

  render() {
    return (
      <div className="todo-list">
        <h1>To Do List</h1>
        <Heading />
        <button onClick={this.handleClearClick}>Clear All!</button>
        {this.state.todoData.map((todo) => (
          // need to pass whole todo object down for onChange to know which todo
          <Todo key={todo.id} todo={todo} handleChange={this.handleChange} />
        ))}
      </div>
    );
  }
}

export default App;
