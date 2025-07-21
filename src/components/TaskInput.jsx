const TaskInput = ({ newTask, setNewTask, handleClick }) => {
    return (
        <div>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default TaskInput;
