import { useState } from "react";

export default function ToDoApp() {
  const [todos, setTodos] = useState([
    {
      text: "Learn React",
      isCompleted: false,
    },
    {
      text: "Build a ToDo app",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(e.target.elements.todo.value);
          // alert(e.target.value)
          e.target.elements.todo.value = "";
        }}
      >
        <input name="todo" type="text" style={{width:"300px",justifyContent: "center",margin:'20px',borderRadius:'5px',height:'20px'}} />
        <button type="submit" style={{width:"80px",justifyContent: "center",margin:'0px 20px'}}>Add Todo</button>
      </form>
      <div>
        {todos.map((todo, index) => (
          <div
            key={index}
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
          >
            {todo.text}
            <div>
              <button onClick={() => completeTodo(index)} style={{margin:'4px'}}>Complete</button>
              <button onClick={() => removeTodo(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
