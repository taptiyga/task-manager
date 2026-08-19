import { useState } from "react";
import type { Task } from "../../data/tasks";
import styles from "./TaskItem.module.css";

type TaskItemProps = {
  task: Task;
  deleteTask: (id: string) => void;
  updateTask: (id: string, title: string, description: string) => void;
  updateTaskStatus: (id: string, status: Task["status"]) => void;
};

export function TaskItem({
  task,
  deleteTask,
  updateTask,
  updateTaskStatus,
}: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  return (
    <div className={styles.card}>
      {isEditing ? (
          <div className={styles.editForm}>
            <input
              className={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className={styles.textarea}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              className={styles.button}
              onClick={() => {
                updateTask(task.id, title, description);
                setIsEditing(false);
              }}
            >
              Save
            </button>
          </div>
      ) : (
        <>
          <h2 className={styles.title}>Название: {task.title}</h2>

          <p className={styles.description}>
            <strong>Описание:</strong> {task.description}
          </p>
          <div className={styles.status}>
            <strong>Статус:</strong> {task.status}
          </div>

          <select
            className={styles.select}
            value={task.status}
            onChange={(e) =>
              updateTaskStatus(task.id, e.target.value as Task["status"])
            }
          >
            <option value="new">New</option>
            <option value="in-progress">In progress</option>
            <option value="done">Done</option>
          </select>
          <div className={styles.actions}>
            <button
              className={styles.button}
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className={styles.button}
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
