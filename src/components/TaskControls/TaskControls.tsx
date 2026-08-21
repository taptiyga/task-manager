import { SearchBar } from "../SearchBar/SearchBar";
import { TaskFilter } from "../TaskFilter/TaskFilter";
import { TaskSort } from "../TaskSort/TaskSort";
import type { Task } from "../../data/tasks";
import styles from "./TaskControls.module.css";
type TaskControlsProps = {
  search: string;
  setSearch: (value: string) => void;

  statusFilter: "all" | Task["status"];
  setStatusFilter: (value: "all" | Task["status"]) => void;

  sortOrder: "default" | "title-asc" | "title-desc";
  setSortOrder: (value: "default" | "title-asc" | "title-desc") => void;
};

export function TaskControls({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  sortOrder,
  setSortOrder,
}: TaskControlsProps) {
  return (
    <div className={styles.controls}>
      <SearchBar search={search} setSearch={setSearch} />

      <TaskFilter
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <TaskSort sortOrder={sortOrder} setSortOrder={setSortOrder} />
    </div>
  );
}
