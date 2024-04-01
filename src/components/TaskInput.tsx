import { useState } from "react";
export interface ITaskInputProps {
  handleTaskInsertion: any;
}

export function TaskInput(props: ITaskInputProps) {
  const { handleTaskInsertion } = props;
  const [taskInput, setTaskInput] = useState("");

  function handleAddButtonClick() {
    if (taskInput) handleTaskInsertion(taskInput.trim());
    setTaskInput("");
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
          onKeyDown={(e) => (e.key == "Enter" ? handleAddButtonClick() : null)}
        />
        <button onClick={handleAddButtonClick}>Add</button>
      </div>
    </>
  );
}
