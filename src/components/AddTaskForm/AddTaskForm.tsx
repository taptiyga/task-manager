import { useState } from "react";
import type { Task } from "../../data/tasks";

type AddTaskFormProps = {
  addTask: (task: Task) => void;
};

export function AddTaskForm({ addTask }: AddTaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const newTask: Task = {
          id: crypto.randomUUID(),
          title,
          description,
          status: "new",
        };
        addTask(newTask);
        setTitle("");
        setDescription("");
      }}
    >
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add task</button>
    </form>
  );
}
