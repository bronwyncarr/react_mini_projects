import React from 'react'

function Todo(props) {
  return(
    <div class="todo-item">
      <input checked={props.completed} type="checkbox" />
      <p class="item">{props.item}</p>
    </div>
  )
}

export default Todo