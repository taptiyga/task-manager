import type { Task } from "../data/tasks";
import { TaskItem } from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
};

export function TaskList({ tasks }: TaskListProps) {
  return tasks.map((task) => <TaskItem key={task.id} task={task} />);
}
