const List = ({ task, onToggle, onDelete }) => {
  return (
    <div>
      {task.task}
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggle(task.id)}
      />
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default List;
