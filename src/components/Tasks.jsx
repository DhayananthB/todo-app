import { useRef, useState } from "react";
import List from "./List";

const Tasks = () => {
  const ptr = useRef(2);
  const [tasks, setTasks] = useState([
    { id: 0, task: "read", isCompleted: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleClick = () => {
    if (newTask.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    setTasks([
      ...tasks,
      {
        id: ptr.current++,
        task: newTask,
        isCompleted: false,
      },
    ]);
    setNewTask("");
  };

  const toggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const saveTask = (id, ntask) => {
    if (ntask.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, task: ntask } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      {tasks.map((task) => (
        <List
          task={task}
          key={task.id}
          onToggle={toggle}
          onDelete={deleteTask}
          onSave={saveTask}
        />
      ))}
    </div>
  );
};
export default Tasks;
