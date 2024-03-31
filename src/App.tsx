import "./sass/App.scss";
import Header from "./components/Header";
import { Task } from "./components/Task";
import { useEffect, useState } from "react";
import { TaskInput } from "./components/TaskInput";

function App() {
  const todoListJson = localStorage.getItem("todo-list");
  const storedTask = todoListJson ? JSON.parse(todoListJson) : [];
  const [tasks, setTasks] = useState(storedTask);

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(tasks));
  }, [tasks]);

  function handleTaskInsertion(task: string) {
    setTasks((prev: any) => [...prev, { taskName: task, isDone: false }]);
  }

  function handleIsDoneClick(id: number) {
    const updatedTasks = [...tasks];
    updatedTasks[id].isDone = !updatedTasks[id].isDone;
    setTasks(updatedTasks);
  }

  function handleDeleteButton(id: number) {
    const updatedTasks = tasks.filter(
      (task: any, index: number) => index !== id
    );
    setTasks(updatedTasks);
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        <TaskInput handleTaskInsertion={handleTaskInsertion} />
        <div className="tasks-container">
          {tasks.map((task: any, index: number) => (
            <Task
              key={index}
              id={index}
              taskName={task.taskName}
              isDone={task.isDone}
              handleIsDoneClick={handleIsDoneClick}
              handleDeleteButton={handleDeleteButton}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
