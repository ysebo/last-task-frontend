import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
