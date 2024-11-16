import React, { createContext, useContext } from "react";
import { Task } from "../types/types";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
  isOnboardingCompleted: boolean;
  completeOnboarding: () => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [isOnboardingCompleted, setIsOnboardingCompleted] =
    useLocalStorage<boolean>("isOnboardingCompleted", false);

  const addTask = (task: Task) => {
    const newTask = { id: Date.now().toString(), ...task, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeOnboarding = () => {
    setIsOnboardingCompleted(true);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
        removeTask,
        isOnboardingCompleted,
        completeOnboarding,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error("useTaskContext must be used within a TaskProvider");
  return context;
};
