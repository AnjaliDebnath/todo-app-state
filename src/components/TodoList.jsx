import React, { useState } from "react";
import Footer from "./Footer";
import { RxCross2 } from "react-icons/rx";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [selectedColors, setSelectedColors] = useState([]); 
  const [statusFilter, setStatusFilter] = useState("All"); 

  const addTodo = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setTodos([...todos, { text: input, color: "default", completed: false }]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  
  const toggleCompleted = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const setColor = (index, color) => {
    setTodos(
      todos.map((todo, i) => (i === index ? { ...todo, color } : todo))
    );
  };

  
  const markAllCompleted = () => {
    setTodos(todos.map((todo) => ({ ...todo, completed: true })));
  };

  
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  
  const toggleColorFilter = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  
  const colorFilteredTodos = todos.filter((todo) => {
    if (selectedColors.length === 0) return true; 
    return selectedColors.includes(todo.color);
  });

  
  const statusFilteredTodos = colorFilteredTodos.filter((todo) => {
    if (statusFilter === "All") return true;
    if (statusFilter === "Active") return !todo.completed;
    if (statusFilter === "Completed") return todo.completed;
    return true;
  });

 
  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={addTodo}
        className="w-full p-2 border rounded mb-4"
      />

      <ul>
        {statusFilteredTodos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between mb-2 p-2 border rounded"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(index)}
              className="mr-2"
            />

            <span
              className={`flex-1 ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>

            <div
              className="w-4 h-4 rounded-full mr-2"
              style={{
                backgroundColor:
                  todo.color === "default" ? "transparent" : todo.color,
              }}
            ></div>
            <select
              value={todo.color}
              onChange={(e) => setColor(index, e.target.value)}
              className="mr-2 border rounded"
            >
              <option value="default">Select Color</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="orange">Orange</option>
              <option value="purple">Purple</option>
              <option value="red">Red</option>
            </select>

            <button
              onClick={() => deleteTodo(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              <RxCross2 /> 
            </button>
          </li>
        ))}
      </ul>

     
      <Footer
        markAllCompleted={markAllCompleted}
        clearCompleted={clearCompleted}
        remainingTodos={remainingTodos}
        toggleColorFilter={toggleColorFilter}
        selectedColors={selectedColors}
        setStatusFilter={setStatusFilter}
        statusFilter={statusFilter}
      />
    </div>
  );
};

export default TodoList;
