import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // create
  const createTask = (title, description) =>
    setTasks([...tasks, { id: uuid(), title, description }]);

  // update
  const updateTask = (id, updateTask) =>
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, ...updateTask } : task
      ),
    ]);

  // delete
  const deleteTask = (id) =>
    setTasks([...tasks.filter((task) => task.id !== id)]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TaskContext);
};
