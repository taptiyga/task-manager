import { useState } from "react";

export function AddTaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        console.log({
          title,
          description,
        });

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
