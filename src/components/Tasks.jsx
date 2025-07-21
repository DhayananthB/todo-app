import List from "./List";
import TaskInput from "./TaskInput";
import DropDown from "./DropDown";
import useTasks from "../hooks/useTasks";


const Tasks = () => {
  const {filteredTask,newTask,setNewTask,handleClick,filter,setFilter,toggle,deleteTask,saveTask} = useTasks();

  return (
    <div>

      <TaskInput newTask={newTask} setNewTask={setNewTask} handleClick={handleClick} />
      <DropDown filter={filter} setFilter={setFilter} />

      {
        filteredTask.map((task) => (
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
