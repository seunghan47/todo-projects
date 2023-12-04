import { useState } from "react"

export default function NewTasks({ onAdd }) {

    const [enteredTask, setEnteredTask] = useState("");

    function handleAddTask(event) {
        setEnteredTask(event.target.value)
    }

    function handleClick() {
        onAdd(enteredTask)
        setEnteredTask("");
    }

    console.log(enteredTask);

    return (
        <div className="flex items-center gap-4">
            <input
                onChange={handleAddTask}
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                value={enteredTask}
            />
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    )
}