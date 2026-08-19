import { useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm";
import { TaskList } from "./components/TaskList";
import { tasks as initialTasks, type Task } from "./data/tasks";

export function App() {
  const [tasks, setTasks] = useState(initialTasks);
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
  return (
    <>
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
    </>
  );
}
