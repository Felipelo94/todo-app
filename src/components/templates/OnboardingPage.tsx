import React from "react";
import { useTaskContext } from "../../context/TaskContext";
import OnboardingStepper from "../organisms/OnboardingStepper";

const OnboardingPage: React.FC = () => {
  const { completeOnboarding } = useTaskContext();

  return (
    <div>
      <OnboardingStepper onComplete={completeOnboarding} />
    </div>
  );
};

export default OnboardingPage;
