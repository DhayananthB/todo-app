import { useState } from "react";
import List from "./List";
let ptr = 1;
const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 0, task: "read", isCompleted: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleClick = () => {
    setTasks([
      ...tasks,
      {
        id: ptr++,
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
        />
      ))}
    </div>
  );
};
export default Tasks;
