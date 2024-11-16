import React, { useState } from "react";
import styles from "./PrioritySelector.module.scss";

export type PriorityLevel = "low" | "medium" | "high";

interface PrioritySelectorProps {
  selectedPriority: PriorityLevel | null;
  onPriorityChange: (priority: PriorityLevel) => void;
}

const PrioritySelector: React.FC<PrioritySelectorProps> = ({
  selectedPriority,
  onPriorityChange,
}) => {
  const handlePriorityClick = (priority: PriorityLevel) => {
    onPriorityChange(priority);
  };

  return (
    <div className={styles.prioritySelector}>
      <button
        className={`${styles.priorityButton} ${
          selectedPriority === "low" ? styles.selectedLow : ""
        }`}
        onClick={() => handlePriorityClick("low")}
      >
        Low
      </button>
      <button
        className={`${styles.priorityButton} ${
          selectedPriority === "medium" ? styles.selectedMedium : ""
        }`}
        onClick={() => handlePriorityClick("medium")}
      >
        Medium
      </button>
      <button
        className={`${styles.priorityButton} ${
          selectedPriority === "high" ? styles.selectedHigh : ""
        }`}
        onClick={() => handlePriorityClick("high")}
      >
        High
      </button>
    </div>
  );
};

export default PrioritySelector;
