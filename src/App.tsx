import React from "react";
import { TaskProvider, useTaskContext } from "./context/TaskContext";
import HomePage from "./components/templates/HomePage";
import OnboardingPage from "./components/templates/OnboardingPage";

const AppContent: React.FC = () => {
  const { isOnboardingCompleted } = useTaskContext();

  return isOnboardingCompleted ? <HomePage /> : <OnboardingPage />;
};

const App: React.FC = () => {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  );
};

export default App;
