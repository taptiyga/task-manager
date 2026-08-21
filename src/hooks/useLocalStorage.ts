import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const savedValue = localStorage.getItem(key);

      if (savedValue) {
        return JSON.parse(savedValue);
      }
    } catch (error) {
      console.error(`Ошибка чтения "${key}" из localStorage:`, error);
    }

    return initialValue;
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Ошибка сохранения "${key}" в localStorage:`, error);
    }
  }, [key, value]);

  return [value, setValue] as const;
}
