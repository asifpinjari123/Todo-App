import React, { useState } from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const [isAscending, setIsAscending] = useState(false);

  const sortedTasks = [...tasks].sort((a, b) => {
    if (isAscending) {
      return new Date(a.time) - new Date(b.time);
    }
    return new Date(b.time) - new Date(a.time);
  });

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };

  return (
    <div>
      <button onClick={toggleSortOrder} className="btn sort-btn">
        Sort by Time ({isAscending ? "Oldest First" : "Newest First"})
      </button>
      <div className="task-list">
        {sortedTasks.map((task) => (
          <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
