import React, { useState, useEffect, ChangeEvent } from "react";
import Header from "./components/Header";
import { Task } from "./components/Task";
import { TaskInput } from "./components/TaskInput";
import "./sass/App.scss";
import { Footer } from "./components/Footer";

interface TaskItem {
  taskName: string;
  isDone: boolean;
}

function App(): JSX.Element {
  const todoListJson = localStorage.getItem("todo-list");
  const storedTask: TaskItem[] = JSON.parse(todoListJson || "[]");
  const [tasks, setTasks] = useState<TaskItem[]>(storedTask);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(tasks));
  }, [tasks]);

  function handleTaskInsertion(task: string): void {
    setTasks((prevTasks) => [...prevTasks, { taskName: task, isDone: false }]);
  }

  function handleIsDoneClick(id: number): void {
    setTasks((prevTasks) =>
      prevTasks.map((task, index) =>
        index === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  }

  function handleDeleteButton(id: number): void {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== id));
  }

  function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(event.target.value);
  }

  const filteredTasks = tasks.filter((task) =>
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
      />
      <div className="container">
        <TaskInput handleTaskInsertion={handleTaskInsertion} />
        <div className="tasks-container">
          {filteredTasks.length <= 0 && (
            <div className="empty">
              <img src="/empty.png" alt="" />
              <p>Nothing to see here...</p>
            </div>
          )}
          {filteredTasks.map((task, index) => (
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
      <Footer />
    </div>
  );
}

export default App;
