import React from 'react'
import './App.css';
import Todo from './components/Todo';
import TodoData from './TodoData';

class App extends React.Component{
  render() {
    function displayDate() {
      const date = new Date()
      const day = date.getDay()
      const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
      const todaysDate = date.getDate()
      const monthOfTheYear = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      const todaysMonth = date.getMonth()
      return `${daysOfTheWeek[day]} ${todaysDate} ${monthOfTheYear[todaysMonth]}`
    }
    
    return (
      <div className="todo-list">
        <h1>To Do List</h1>
        <h2>{displayDate()}</h2>
        {TodoData.map((todo) => <Todo key={todo.item} item={todo.item} completed={todo.completed} />)}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="todo-list">
//       <h1>To Do List</h1>
//       {TodoData.map((todo) => <Todo key={todo.item} item={todo.item} completed={todo.completed} />)}
//     </div>
//   );
// }

export default App;
