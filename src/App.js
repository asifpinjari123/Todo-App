import React, { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setEditingTask(null);
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1 className="app-title">Todo App</h1>
      <SearchBar onSearch={setSearchTerm} />
      <AddTaskForm
        addTask={addTask}
        editTask={editTask}
        currentTask={editingTask}
        isEditing={!!editingTask}
      />
      <TaskList tasks={filteredTasks} onEdit={setEditingTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;
