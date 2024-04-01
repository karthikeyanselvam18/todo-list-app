import * as React from "react";
export interface ITaskProps {
  id: number;
  taskName: string;
  isDone: boolean;
  handleIsDoneClick: any;
  handleDeleteButton: any;
}

export function Task(props: ITaskProps) {
  const { id, taskName, isDone, handleIsDoneClick, handleDeleteButton } = props;

  const strikeStyle = isDone ? { width: "100%" } : { width: "0px" };
  const radioStyle = isDone ? { left: "26px" } : { left: "2px" };
  return (
    <>
      <div className="task">
        <span className="task-name">
          {taskName}
          <span className="strike-line" style={strikeStyle}></span>
        </span>
        <div className="button-group">
          <div
            className="radio-container"
            onClick={() => handleIsDoneClick(id)}
          >
            <div className="radio-button" style={radioStyle}></div>
          </div>
          <button className="delete" onClick={() => handleDeleteButton(id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
