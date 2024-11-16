import React from "react";
import { Clock } from "lucide-react";
import styles from "./TaskCard.module.scss";
import { useTaskContext } from "../../../context/TaskContext";
import { Category } from "../CategorySelector/CategorySelector";
import Button from "../../atoms/Button/Button";

interface TaskProps {
  id: string;
  title: string;
  description: string;
  date: string | null;
  category: Category;
  completed: boolean;
}

const TaskCard: React.FC<TaskProps> = ({
  id,
  title,
  date,
  category,

  completed,
}) => {
  const { toggleTask, removeTask } = useTaskContext();
  const formatTime = (date: string | null) => {
    if (!date) return "Today";
    const taskDate = new Date(date);
    return `Today At ${taskDate.getHours()}:${String(
      taskDate.getMinutes()
    ).padStart(2, "0")}`;
  };

  return (
    <div className={styles.taskCard}>
      <Button
        className={styles.deleteButton}
        onClick={() => removeTask(id)}
        aria-label="Delete task"
        label="X"
      />

      <div className={styles.leftSection}>
        <div className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            checked={completed}
            className={styles.checkbox}
            onChange={() => toggleTask(id)}
          />
        </div>

        <div className={styles.contentSection}>
          <span className={styles.title}>{title}</span>
          <div className={styles.timeSection}>
            <Clock className={styles.clockIcon} />
            <span>{formatTime(date)}</span>
          </div>
        </div>
      </div>

      {category && (
        <div className={styles.rightSection}>
          <span className={styles.badge + " " + category.styleKey}>
            {category.name}
          </span>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
