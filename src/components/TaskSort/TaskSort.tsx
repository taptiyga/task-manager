import styles from "./TaskSort.module.css";

type TaskSortProps = {
  sortOrder: "default" | "title-asc" | "title-desc";
  setSortOrder: (value: "default" | "title-asc" | "title-desc") => void;
};

export function TaskSort({ sortOrder, setSortOrder }: TaskSortProps) {
  return (
    <select
      className={styles.select}
      value={sortOrder}
      onChange={(e) =>
        setSortOrder(e.target.value as "default" | "title-asc" | "title-desc")
      }
    >
      <option value="default">По умолчанию</option>
      <option value="title-asc">По названию ↑</option>
      <option value="title-desc">По названию ↓</option>
    </select>
  );
}
