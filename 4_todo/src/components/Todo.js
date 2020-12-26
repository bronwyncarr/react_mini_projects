import React from "react";

// onChange recieves event
// whole todo object is passed in as props (needed by handleChange) so can access value from keys eg. todo.item
function Todo(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChange(props.todo.id)}
      />
      <p className="item">{props.todo.item}</p>
    </div>
  );
}

export default Todo;
