import type { Task } from "../data/tasks";

type TaskItemProps = {
  task: Task;
};

export function TaskItem({ task }: TaskItemProps) {
  return (
    <>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </>
  );
}
