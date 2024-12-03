import { useState } from "react";
import { useTasks } from "./TaskContext";

const AddTask = () => {
  const { addTask } = useTasks(); 
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim()) {
      addTask(taskInput);
      setTaskInput("");
    }
  };
  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Napishite tasku:"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
