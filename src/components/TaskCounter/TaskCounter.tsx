import type { Task } from "../../data/tasks";
import styles from "./TaskCounter.module.css";
type TaskCounterProps = {
  tasks: Task[];
};
export function TaskCounter({ tasks }:TaskCounterProps) {
 const total = tasks.length;

 const newTasks = tasks.filter((task) => task.status === "new").length;

 const inProgressTasks = tasks.filter(
   (task) => task.status === "in-progress",
 ).length;

 const doneTasks = tasks.filter((task) => task.status === "done").length;
  return (
    <div className={styles.counter}>
      <div className={styles.item}>Всего задач: {total}</div>
      <div className={styles.item}>Новые: {newTasks}</div>
      <div className={styles.item}>В процессе: {inProgressTasks}</div>
      <div className={styles.item}>Выполнено: {doneTasks}</div>
    </div>
  );
}
