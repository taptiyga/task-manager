import { useState } from "react";
import type { Task } from "../../data/tasks";
import styles from "./AddTaskForm.module.css";

type AddTaskFormProps = {
  addTask: (task: Task) => void;
};

export function AddTaskForm({ addTask }: AddTaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (!title.trim()) {
          setError("Название задачи обязательно");
          return;
        }

        const newTask: Task = {
          id: crypto.randomUUID(),
          title: title.trim(),
          description,
          status: "new",
        };
        addTask(newTask);
        setError("");
        setTitle("");
        setDescription("");
      }}
    >
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
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.button} type="submit">
        Add task
      </button>
    </form>
  );
}
