import type { Task } from "../data/tasks";

type TaskItemProps = {
  task: Task;
};

export function TaskItem({ task }: TaskItemProps) {
  return (
    <>
      <h2>Название: {task.title}</h2>
      <p>
        <strong>Описание:</strong> {task.description}
      </p>
      <p>
        <strong>Статус:</strong> {task.status}
      </p>
    </>
  );
}
