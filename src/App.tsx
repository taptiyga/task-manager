import { TaskList } from "./components/TaskList";
import { tasks } from "./data/tasks";

export function App() {
  return (
    <>
      <TaskList tasks={tasks} />
    </>
  );
}
