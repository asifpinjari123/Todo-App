import React, { useState, useEffect } from "react";

const AddTaskForm = ({ addTask, editTask, currentTask, isEditing }) => {
  const [task, setTask] = useState({ title: "", description: "" });

  useEffect(() => {
    if (isEditing && currentTask) {
      setTask(currentTask);
    }
  }, [currentTask, isEditing]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editTask(task);
    } else {
      addTask({ ...task, time: new Date().toISOString(), id: Date.now() });
    }
    setTask({ title: "", description: "" });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Enter Task Title"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Enter Task Description"
        required
      />
      <button type="submit" className="btn">
        {isEditing ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default AddTaskForm;
