import React, { useRef } from "react";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current?.value;

    if (enteredText?.trim().length === 0) {
      return;
    }

    
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">{enteredText}</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
