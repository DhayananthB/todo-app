const List = ({ task, onToggle }) => {
  return (
    <div>
      {task.task}
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggle(task.id)}
      />
    </div>
  );
};

export default List;
