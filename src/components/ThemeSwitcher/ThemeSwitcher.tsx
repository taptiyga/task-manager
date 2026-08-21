import styles from "./ThemeSwitcher.module.css";

type ThemeSwitcherProps = {
  theme: "light" | "dark";
  setTheme: (value: "light" | "dark") => void;
};

export function ThemeSwitcher({ theme, setTheme }: ThemeSwitcherProps) {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "🌙 Тёмная тема" : "☀️ Светлая тема"}
    </button>
  );
}
