import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function AddTask() {
    const [text, setText] = useState("");
    const { dispatch } = useContext(TaskContext);

    const handleAdd = () => {
        if (!text.trim()) return;

        dispatch({
            type: "ADD_Task",
            payload: {
                id: Date.now(),
                text,
                completed: false,
            },
        });
        setText("");
    };

    return (
        <>
            <h1>Add Task</h1>
            <input
                type="text"
                placeholder="Enter task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </>
    );
}