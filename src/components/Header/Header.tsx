import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.css";

type HeaderProps = {
  theme: "light" | "dark";
  setTheme: (value: "light" | "dark") => void;
};

export function Header({ theme, setTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Менеджер задач</h1>

      <ThemeSwitcher theme={theme} setTheme={setTheme} />
    </header>
  );
}
