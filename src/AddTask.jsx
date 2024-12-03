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
        placeholder="Tasku napishite pj"
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
