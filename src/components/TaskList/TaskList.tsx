import type { Task } from "../../data/tasks";
import { TaskItem } from "../TaskItem/TaskItem";


type TaskListProps = {
  tasks: Task[];
  deleteTask: (id: string) => void;
  updateTask: (id: string, title: string, description: string) => void;
  updateTaskStatus: (id: string, status: Task["status"]) => void;
};

export function TaskList({
  tasks,
  deleteTask,
  updateTask,
  updateTaskStatus,
}: TaskListProps) {
  return tasks.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      deleteTask={deleteTask}
      updateTask={updateTask}
      updateTaskStatus={updateTaskStatus}
    />
  ));
}
