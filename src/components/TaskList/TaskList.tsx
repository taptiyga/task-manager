import type { Task } from "../../data/tasks";
import { TaskItem } from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";

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
  if(tasks.length===0){
    return <p className={styles.empty}>Задачи не найдены</p>
  }
  return (
    <div className={styles.list}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
          updateTaskStatus={updateTaskStatus}
        />
      ))}
    </div>
  );
}
