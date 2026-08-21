import { useState } from "react";
import styles from "./ClearTasks.module.css";

type ClearTasksProps = {
  clearAllTasks: () => void;
};

export function ClearTasks({ clearAllTasks }: ClearTasksProps) {
  const [isConfirming, setIsConfirming] = useState(false);

  if (isConfirming) {
    return (
      <div className={styles.confirm}>
        <p className={styles.text}>Удалить все задачи?</p>

        <div className={styles.actions}>
          <button
            className={styles.deleteButton}
            type="button"
            onClick={() => {
              clearAllTasks();
              setIsConfirming(false);
            }}
          >
            Удалить всё
          </button>

          <button
            className={styles.cancelButton}
            type="button"
            onClick={() => setIsConfirming(false)}
          >
            Отмена
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => setIsConfirming(true)}
    >
      Удалить все задачи
    </button>
  );
}
