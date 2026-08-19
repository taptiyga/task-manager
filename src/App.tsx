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
  return (
    <>
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  );
}
