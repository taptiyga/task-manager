import { useEffect, useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm/AddTaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { tasks as initialTasks, type Task } from "./data/tasks";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { TaskCounter } from "./components/TaskCounter/TaskCounter";
import { TaskControls } from "./components/TaskControls/TaskControls";
import { useLocalStorage } from "./hooks/useLocalStorage";
export function App() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", initialTasks);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | Task["status"]>(
    "all",
  );
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

      <TaskControls
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

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
