import React from "react";
import { TaskProvider } from "./TaskContext";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";
const App = () => {
  return (
    <TaskProvider>
      <div className="taskManager">
        <h1>Task Manager</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
