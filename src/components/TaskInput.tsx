import { useState } from "react";
import "../sass/TaskInput.scss";
export interface ITaskInputProps {
  handleTaskInsertion: any;
}

export function TaskInput(props: ITaskInputProps) {
  const { handleTaskInsertion } = props;
  const [taskInput, setTaskInput] = useState("");

  function handleAddButtonClick() {
    if (taskInput) handleTaskInsertion(taskInput.trim());
  }
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          name=""
          id=""
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={handleAddButtonClick}>Add</button>
      </div>
    </>
  );
}
