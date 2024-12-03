import { useTasks } from "./TaskContext";

const TaskList = () => {
  const { tasks, deleteTask } = useTasks(); 

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}{" "}
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
