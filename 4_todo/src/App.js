import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoData from "./TodoData";

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          todoData: TodoData
      }
      this.handleChange = this.handleChange.bind(this)
  }

  // passed id of item to have checkbox flipped.
  // maps through entire todoData array and looks for item with id matching to the one passes in.
  // will then flip the value true/false of that completed key: value.
  // saves to a new array called updatedTodos and sets that to state.
  handleChange(id) {
    this.setState(prevState => {
        const updatedTodos = prevState.todoData.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        return {
            todoData: updatedTodos
        }
    })
  }

  render() {
    function displayDate() {
      const date = new Date();
      const day = date.getDay();
      const daysOfTheWeek = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      const todaysDate = date.getDate();
      const monthOfTheYear = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
      const todaysMonth = date.getMonth();
      return `${daysOfTheWeek[day]} ${todaysDate} ${monthOfTheYear[todaysMonth]}`;
    }

    return (
      <div className="todo-list">
        <h1>To Do List</h1>
        <h2>{displayDate()}</h2>
        {this.state.todoData.map((todo) => (
          // need to pass whole todo object down for onChange to know which todo
          <Todo key={todo.id} todo={todo} handleChange={this.handleChange} />
        ))}
      </div>
    );
  }
}

export default App;
