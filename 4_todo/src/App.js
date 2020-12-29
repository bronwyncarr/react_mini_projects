import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoData from "./TodoData";
import Heading from "./components/Heading";
import NewItem from "./components/NewItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: TodoData,
    };
  }

  // Passed item to have checkbox flipped.
  // Maps through entire todoData array and looks for item matching to the one passes in.
  // Will then flip the value true/false of that completed key: value.
  // Saves to a new array called updatedTodos and sets that to state.
  handleChange = (item) => {
    this.setState((prevState) => {
      const updatedTodos = prevState.todoData.map((todo) => {
        if (todo.item === item) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return {
        todoData: updatedTodos,
      };
    });
  };

  handleClearClick = () => {
    this.setState((prevState) => {
      const clearedTodos = prevState.todoData.map((todo) => {
        return { ...todo, completed: false };
      });
      return { todoData: clearedTodos };
    });
  };

  // Currently works but will look to change from concat to push so not mutating prevState but push returns length of array...
  handleSubmit = (e, userInput) => {
    e.preventDefault();
    const newTodo = { completed: false, item: userInput };
    this.setState((prevState) => {
      return {
        todoData: prevState.todoData.concat(newTodo),
      };
    });
  };

  render() {
    return (
      <div className="todo-list">
        <h1>To Do List</h1>
        <Heading />
        <NewItem handleSubmit={this.handleSubmit} />
        <button onClick={this.handleClearClick}>Clear All!</button>
        {this.state.todoData.map((todo) => (
          // Need to pass whole todo object down for onChange to know which todo
          <Todo key={todo.item} todo={todo} handleChange={this.handleChange} />
        ))}
      </div>
    );
  }
}

export default App;
