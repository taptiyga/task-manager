import { useEffect, useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm/AddTaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { tasks as initialTasks, type Task } from "./data/tasks";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { TaskSort } from "./components/TaskSort/TaskSort";
import { TaskCounter } from "./components/TaskCounter/TaskCounter";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";

export function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return initialTasks;
  });
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | Task["status"]>(
    "all",
  );
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme === "dark" ? "dark" : "light";
  });
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const [sortOrder, setSortOrder] = useState<
    "default" | "title-asc" | "title-desc"
  >("default");
  const addTask = (task: Task): void => {
    setTasks((prevTasks) => [task, ...prevTasks]);
    setSearch("");
    setStatusFilter("all");
    setSortOrder("default");
  };
  const deleteTask = (id: string): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  const updateTask = (id: string, title: string, description: string): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title, description } : task,
      ),
    );
  };
  const updateTaskStatus = (id: string, status: Task["status"]): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, status } : task)),
    );
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || task.status === statusFilter;

    return matchesSearch && matchesStatus;
  });
  const sortedTasks = [...filteredTasks];

  if (sortOrder === "title-asc") {
    sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortOrder === "title-desc") {
    sortedTasks.sort((a, b) => b.title.localeCompare(a.title));
  }
  return (
    <main className={styles.app}>
      <Header theme={theme} setTheme={setTheme} />
      <AddTaskForm addTask={addTask} />

      <SearchBar search={search} setSearch={setSearch} />

      <TaskFilter
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <TaskSort sortOrder={sortOrder} setSortOrder={setSortOrder} />

      <TaskCounter tasks={tasks} />

      <TaskList
        tasks={sortedTasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
        updateTaskStatus={updateTaskStatus}
      />
    </main>
  );
}
