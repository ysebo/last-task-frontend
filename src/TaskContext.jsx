import React, { createContext, useContext } from "react";
import useTaskManager from "./useTaskManager"; 

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const taskManager = useTaskManager(); 

  return (
    <TaskContext.Provider value={taskManager}>
      {children}
    </TaskContext.Provider>
  );
};
export const useTasks = () => useContext(TaskContext);
