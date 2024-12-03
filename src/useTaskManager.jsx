import { useState } from "react";

const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (index) =>
    setTasks(tasks.filter((_, i) => i !== index));

  return { tasks, addTask, deleteTask };
};

export default useTaskManager;
