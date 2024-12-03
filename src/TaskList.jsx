import { useTasks } from "./TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
