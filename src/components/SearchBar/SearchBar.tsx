import styles from "./SearchBar.module.css";

type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};
export function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <input
      className={styles.input}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Поиск задач..."
    />
  );
}
