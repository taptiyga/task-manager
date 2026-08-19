import type { Task } from "../data/tasks";

type TaskItemProps = {
  task: Task;
  deleteTask: (id: string) => void;
};

export function TaskItem({ task, deleteTask }: TaskItemProps) {
  return (
    <>
      <h2>Название: {task.title}</h2>
      <p>
        <strong>Описание:</strong> {task.description}
      </p>
      <p>
        <strong>Статус:</strong> {task.status}
      </p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </>
  );
}
