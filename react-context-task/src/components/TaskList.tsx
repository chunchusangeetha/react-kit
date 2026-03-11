import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import type { Task } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { state } = useContext(TaskContext);

  return (
    <>
      {state.tasks.map((task: Task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
}

export default TaskList;