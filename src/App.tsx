import { useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm/AddTaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { tasks as initialTasks, type Task } from "./data/tasks";
import styles from "./App.module.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";

export function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | Task["status"]>(
    "all",
  );
  const addTask = (task: Task): void => {
    setTasks((prevTasks) => [task, ...prevTasks]);
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
  return (
    <main className={styles.app}>
      <AddTaskForm addTask={addTask} />

      <SearchBar search={search} setSearch={setSearch} />

      <TaskFilter
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
        updateTaskStatus={updateTaskStatus}
      />
    </main>
  );
}
