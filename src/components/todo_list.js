import React from "react";
import TodoItem from "./todo_item";

const TodoList = (props) => {

  function renderItems() {
    return props.items.map((item, index) => {
      return (
        <li key={index} className="list-group-item justify-content-between">
          <TodoItem  value={item} />
          <span
            className="badge badge-danger badge-pill"
            onClick={() => props.removeItem(index)}>Delete</span>
        </li>
      )
    });
  }

  return (
    <div>
      <ul className="list-group">
        {renderItems()}
      </ul>
    </div>
  );
};

export default TodoList;
