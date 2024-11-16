import React, { useState } from "react";
import Button from "../atoms/Button/Button";
import styles from "./OnboardingStepper.module.scss";

interface OnboardingStepperProps {
  onComplete: () => void;
}

const slides = [
  {
    id: 1,
    image: "/images/step1.svg",
    title: "Manage your tasks",
    description:
      "You can easily manage all of your daily tasks in one place for free.",
  },
  {
    id: 2,
    image: "/images/step2.svg",
    title: "Create daily routine",
    description:
      "In UpTodo, you can create your personalized routine to stay productive.",
  },
  {
    id: 3,
    image: "/images/step3.svg",
    title: "Organize your tasks",
    description:
      "You can organize your daily tasks by adding them into separate categories.",
  },
];

const OnboardingStepper: React.FC<OnboardingStepperProps> = ({
  onComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < slides.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleGetStarted = () => {
    onComplete(); // Llama a la función pasada como prop
  };

  return (
    <div className={styles.stepper}>
      <div className={styles.content}>
        <img
          src={slides[currentStep].image}
          alt={slides[currentStep].title}
          className={styles.image}
        />
        <h1>{slides[currentStep].title}</h1>
        <p>{slides[currentStep].description}</p>
      </div>
      <div className={styles.navigation}>
        {currentStep > 0 && <Button label="Back" onClick={handleBack} />}
        {currentStep < slides.length - 1 ? (
          <Button label="Next" onClick={handleNext} />
        ) : (
          <Button label="Get Started" onClick={handleGetStarted} />
        )}
      </div>
    </div>
  );
};

export default OnboardingStepper;
