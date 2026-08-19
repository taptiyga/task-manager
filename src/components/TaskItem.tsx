import { useState } from "react";
import type { Task } from "../data/tasks";

type TaskItemProps = {
  task: Task;
  deleteTask: (id: string) => void;
  updateTask: (id: string, title: string, description: string) => void;
};

export function TaskItem({ task, deleteTask, updateTask }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  return (
    <>
      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            onClick={() => {
              updateTask(task.id, title, description);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h2>Название: {task.title}</h2>

          <p>
            <strong>Описание:</strong> {task.description}
          </p>

          <p>
            <strong>Статус:</strong> {task.status}
          </p>

          <button onClick={() => setIsEditing(true)}>Edit</button>

          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </>
  );
}
