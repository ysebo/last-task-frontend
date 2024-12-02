import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  return (
    <div className = 'taskManager'>
      <h1>Task Manager</h1>
      <input
        type='text'
        value={taskInput}
        placeholder="Tasku napishite:"
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
