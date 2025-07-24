const TaskInput = ({ newTask, setNewTask, handleClick }) => {
    return (
        <div className="flex flex-col gap-3 w-full max-w-md mx-auto">
            <textarea
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="What needs to be done?"
                className="w-full h-28 p-4 border border-gray-300 dark:border-gray-700 rounded-lg 
                           bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 
                           placeholder-gray-500 dark:placeholder-gray-400 
                           focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
            />

            <button
                onClick={handleClick}
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 
                           disabled:bg-gray-400 
                           text-white font-medium rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
                Add Task
            </button>
        </div>
    );
};

export default TaskInput;
