import logo from "./logo.svg";
import "./App.css";
import { TaskPage } from "./components/TaskPage";
import { Routes, Route } from "react-router-dom";
import { SingleTask } from "./components/SingleTask";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/tasks/:id" element={<SingleTask />} />
        <Route path="*" element={<h1>ERROR PAGE</h1>} />
      </Routes>
    </div>
  );
}

export default App;
