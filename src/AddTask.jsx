const AddTask = ({ taskInput, setTaskInput, onAddTask }) => {
  return (
    <div>
      <input
        type="text"
        value={taskInput}
        placeholder="Tasku napishi"
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={onAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
