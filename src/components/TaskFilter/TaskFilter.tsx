import type { Task } from "../../data/tasks";
import styles from "./TaskFilter.module.css";

type TaskFilterProps = {
  statusFilter: "all" | Task["status"];
  setStatusFilter: (value: "all" | Task["status"]) => void;
};
export function TaskFilter({ statusFilter, setStatusFilter }: TaskFilterProps) {
  return (
    <select className={styles.select}
      value={statusFilter}
      onChange={(e) =>
        setStatusFilter(e.target.value as "all" | Task["status"])
      }
    >
      <option value="all">All</option>
      <option value="new">New</option>
      <option value="in-progress">In progress</option>
      <option value="done">Done</option>
    </select>
  );
}
