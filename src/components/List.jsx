import { useState } from "react";

const List = ({ task, onToggle, onDelete, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.task);
  return (
    <div>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggle(task.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            onClick={() => {
              onSave(task.id, newTask);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          {task.task}

          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default List;
