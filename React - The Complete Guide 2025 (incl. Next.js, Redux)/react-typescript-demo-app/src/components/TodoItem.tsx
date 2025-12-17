import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      <b>{props.text}</b> (Remove Todo item by clicking on it, only if it is
      fulfilled!)
    </li>
  );
};
export default TodoItem;
