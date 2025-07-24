import List from "./List";
import TaskInput from "./TaskInput";
import DropDown from "./DropDown";
import useTasks from "../hooks/useTasks";

const Tasks = () => {
  const {
    filteredTask,
    newTask,
    setNewTask,
    handleClick,
    filter,
    setFilter,
    toggle,
    deleteTask,
    saveTask,
  } = useTasks();

  return (
    <div className="bg-gray-50 text-black dark:bg-slate-900 dark:text-slate-100 min-h-screen m-0 font-ubuntu">
      <div className="max-w-md mx-auto px-4 space-y-4 pt-10">
        <TaskInput newTask={newTask} setNewTask={setNewTask} handleClick={handleClick} />
        <DropDown filter={filter} setFilter={setFilter} />
      </div>
      <div className="max-w-md mx-auto px-4 space-y-2 pt-6">
        {filteredTask.map((task) => (
          <List
            task={task}
            key={task.id}
            onToggle={toggle}
            onDelete={deleteTask}
            onSave={saveTask}
          />
        ))}
      </div>
    </div>

  );
};

export default Tasks;
