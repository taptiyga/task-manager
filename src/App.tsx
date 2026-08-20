import { useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm/AddTaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { tasks as initialTasks, type Task } from "./data/tasks";
import styles from "./App.module.css";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [search, setSearch] = useState("");
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
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <main className={styles.app}>
      <AddTaskForm addTask={addTask} />

      <SearchBar search={search} setSearch={setSearch} />

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
        updateTaskStatus={updateTaskStatus}
      />
    </main>
  );
}
