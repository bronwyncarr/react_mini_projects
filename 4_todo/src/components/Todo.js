import React from "react";

// onChange recieves event
// whole todo object is passed in as props (needed by handleChange) so can access value from keys eg. todo.item
function Todo(props) {
  const styles = {};
  if (props.todo.completed) {
    styles.textDecoration = "line-through";
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => { props.handleChange(props.todo.item); }}
      />
      <p
        className="item"
        onClick={() => props.handleChange(props.todo.item)}
        style={styles}
      >
        {props.todo.item}
      </p>
    </div>
  );
}

export default Todo;
