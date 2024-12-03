import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
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
    <div className="taskManager">
      <h1>Task Manager</h1>
      <AddTask
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        onAddTask={addTask}
      />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
