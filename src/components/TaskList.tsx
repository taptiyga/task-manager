import type { Task } from "../data/tasks";
import { TaskItem } from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  deleteTask: (id: string) => void;
  updateTask: (id: string, title: string, description: string) => void;
};

export function TaskList({ tasks, deleteTask, updateTask }: TaskListProps) {
  return tasks.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      deleteTask={deleteTask}
      updateTask={updateTask}
    />
  ));
}
