import { TaskItem } from "./TaskItem";

export function TaskList({ tasks }) {
  return tasks.map((task) => <TaskItem key={task.id} task={task} />);
}
