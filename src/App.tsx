import { AddTaskForm } from "./components/AddTaskForm";
import { TaskList } from "./components/TaskList";
import { tasks } from "./data/tasks";

export function App() {
  return (
    <>
      <AddTaskForm />
      <TaskList tasks={tasks} />
    </>
  );
}
