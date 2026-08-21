import { useState } from "react";
import type { Task } from "../../data/tasks";
import styles from "./TaskItem.module.css";
import { statusLabels } from "../../utils/statusLabels";

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
  const [isConfirming, setIsConfirming] = useState(false);

  const [editError, setEditError] = useState("");

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const startEditing = () => {
    setTitle(task.title);
    setDescription(task.description);
    setEditError("");
    setIsEditing(true);
  };

  const saveTask = () => {
    if (!title.trim()) {
      setEditError("Название задачи обязательно");
      return;
    }

    const updatedTitle = title.trim();

    updateTask(task.id, updatedTitle, description);

    setTitle(updatedTitle);
    setEditError("");
    setIsEditing(false);
  };

  const cancelEditing = () => {
    setTitle(task.title);
    setDescription(task.description);
    setEditError("");
    setIsEditing(false);
  };

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

          {editError && <p className={styles.error}>{editError}</p>}

          <div className={styles.actions}>
            <button type="button" className={styles.button} onClick={saveTask}>
              Сохранить
            </button>

            <button
              type="button"
              className={styles.cancelButton}
              onClick={cancelEditing}
            >
              Отмена
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className={styles.title}>Название: {task.title}</h2>

          <p className={styles.description}>
            <strong>Описание:</strong> {task.description}
          </p>

          <div className={styles.status}>
            <strong>Статус:</strong> {statusLabels[task.status]}
          </div>

          <select
            className={styles.select}
            value={task.status}
            onChange={(e) =>
              updateTaskStatus(task.id, e.target.value as Task["status"])
            }
          >
            <option value="new">Новая</option>
            <option value="in-progress">В процессе</option>
            <option value="done">Выполнена</option>
          </select>

          {!isConfirming ? (
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.button}
                onClick={startEditing}
              >
                Редактировать
              </button>

              <button
                type="button"
                className={styles.button}
                onClick={() => {
                  setIsEditing(false);
                  setIsConfirming(true);
                }}
              >
                Удалить
              </button>
            </div>
          ) : (
            <div className={styles.confirm}>
              <p>Удалить эту задачу?</p>

              <button
                type="button"
                className={styles.deleteButton}
                onClick={() => {
                  deleteTask(task.id);
                  setIsConfirming(false);
                }}
              >
                Удалить
              </button>

              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => setIsConfirming(false)}
              >
                Отмена
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
