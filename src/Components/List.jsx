import { useState } from "react";

const List = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const addTodo = () => {
    if (inputValue.trim() === "") {
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue("");
  };
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  console.log(todos);

  return (
    <>
      <section className="bg-slate-400 h-screen  text-white p-10">
        <h1 className="p-4   text-2xl text-center w-1/2 flex justify-center mx-auto bg-amber-100 rounded-4xl text-black">
          Todo App
        </h1>
        <div className="p-10 flex mt-10 justify-center gap-4 bg-amber-100 text-black rounded-4xl">
          <input
            className="flex items-center justify-center bg-gray-600 border-none outline-none text-white rounded-2xl w-80 h-10 p-4"
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button
            className="rounded-2xl h-10 w-20 bg-blue-600 text-white"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <div className="flex self-end mt-10 items-center">
          <ul className="flex flex-col align-middle justify-center w-full gap-4">
            {todos.map((todo, index) => (
              <li
                key={todo.id}
                className="flex items-center justify-between gap-4 bg-amber-100 text-black rounded-4xl p-8 "
              >
                <span
                  className={
                    todo.completed
                      ? "line-through cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  {todo.text}
                </span>
                <span className="w-[100px] flex justify-between">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className={`${
                      todo.completed ? "bg-amber-500 cursor-pointer" : ""
                    }appearance-none w-8 h-8 rounded-xl accent-amber-300 bg-amber-500 p-4`}
                  />
                  <button
                    className="bg-red-600 text-white px-2 rounded-2xl cursor-pointer"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default List;
