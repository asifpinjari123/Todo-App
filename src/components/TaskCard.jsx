import React from "react";

const TaskCard = ({ task, onEdit, onDelete }) => (
  <div className="task-card">
    <h3>{task.title}</h3>
    <p>{task.description}</p>
    <small>{new Date(task.time).toLocaleString()}</small>
    <div className="task-actions">
      <button onClick={() => onEdit(task)} className="btn edit-btn">Edit</button>
      <button onClick={() => onDelete(task.id)} className="btn delete-btn">Delete</button>
    </div>
  </div>
);

export default TaskCard;
