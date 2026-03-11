import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

interface TaskItemProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
}

function TaskItem({ task }: TaskItemProps) {
  const { dispatch } = useContext(TaskContext);

  return (
    <div>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none"
        }}
      >
        {task.text}
      </span>

      <button
        onClick={() =>
          dispatch({ type: "Toggle_Task", payload: task.id })
        }
      >
        {task.completed ? "Undo" : "Complete"}
      </button>

      <button
        onClick={() =>
          dispatch({ type: "Delete_Task", payload: task.id })
        }
      >
        delete
      </button>
    </div>
  );
}

export default TaskItem;