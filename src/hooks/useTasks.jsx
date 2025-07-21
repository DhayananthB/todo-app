import { useRef, useState } from "react";

const useTasks = () => {
    
    const ptr = useRef(2);

    const [tasks, setTasks] = useState([
        { id: 0, task: "read", isCompleted: false },
    ]);
    const [newTask, setNewTask] = useState("");
    const [filter, setFilter] = useState("All");

    const filteredTask = tasks.filter((task) => {
        if (filter === "Completed") return task.isCompleted;
        else if (filter === "Pending") return !task.isCompleted;
        else return true;
    })

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

    return { filteredTask, newTask, setNewTask, handleClick, filter, setFilter, toggle, deleteTask, saveTask }


}

export default useTasks;