import { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { query, where, collection, orderBy, onSnapshot, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [filter, setFilter] = useState("All");
    const user = auth.currentUser;

    useEffect(() => {
        if (!user) return;

        const q = query(
            collection(db, "tasks"),
            where("uid", "==", user.uid),
            orderBy("timestamp", "desc")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const taskList = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTasks(taskList);
        });

        return () => unsubscribe();
    }, [user]);

    const handleClick = async () => {
        if (newTask.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }

        await addDoc(collection(db, "tasks"), {
            uid: user.uid,
            task: newTask,
            isCompleted: false,
            timestamp: new Date(),
        })
        setNewTask("");
    };

    const toggle = async (id, isCompleted) => {
        await updateDoc(doc(db, "tasks", id), {
            isCompleted: !isCompleted,
        })
    };

    const saveTask = async (id, ntask) => {
        if (ntask.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }
        await updateDoc(doc(db, "tasks", id), {
            task: ntask,
        })
    };

    const deleteTask = async (id) => {
        await deleteDoc(doc(db, "tasks", id));
    };
    const filteredTask = tasks.filter((task) => {
        if (filter === "Completed") return task.isCompleted;
        else if (filter === "Pending") return !task.isCompleted;
        else return true;
    })

    return { filteredTask, newTask, setNewTask, handleClick, filter, setFilter, toggle, deleteTask, saveTask }


}

export default useTasks;