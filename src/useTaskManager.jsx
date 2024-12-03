import { useState } from "react";

const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const getTasks = () => tasks;

  return {
    tasks,
    addTask,
    deleteTask,
  };
};

export default useTaskManager;
