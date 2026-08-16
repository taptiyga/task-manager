import { tasks } from "./data/tasks";

function App() {
  return <>{tasks.map((task)=>(<div>{task.title}</div>))}</>;
}

export default App;
