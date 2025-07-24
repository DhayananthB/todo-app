import { useState } from "react";

const List = ({ task, onToggle, onDelete, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.task);

  return (
    <div className="flex items-start sm:items-center flex-col sm:flex-row justify-between gap-2 p-4 bg-gray-100 dark:bg-slate-800 rounded-md shadow-sm mb-2 w-full">
      <div className="flex items-start sm:items-center gap-3 w-full">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onToggle(task.id, task.isCompleted)}
          className="w-5 h-5 accent-blue-600 mt-1 sm:mt-0"
        />

        {isEditing ? (
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <span
            className={`flex-1 break-words ${
              task.isCompleted ? "line-through text-gray-400" : "text-gray-800 dark:text-gray-100"
            }`}
          >
            {task.task}
          </span>
        )}
      </div>

      <div className="flex gap-2 justify-end self-end sm:self-auto">
        {isEditing ? (
          <button
            onClick={() => {
              onSave(task.id, newTask);
              setIsEditing(false);
            }}
            className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;
