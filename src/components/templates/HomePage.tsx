import React, { useState } from "react";
import { useTaskContext } from "../../context/TaskContext";
import styles from "./HomePage.module.scss";

import Modal from "../molecules/Modal/Modal";
import DatePicker from "../molecules/DatePicker/DatePicker";
import Button from "../atoms/Button/Button";
import CategorySelectorModal, {
  Category,
  INITIAL_CATEGORIES,
} from "../molecules/CategorySelector/CategorySelector";
import TaskCard from "../molecules/TaskItem/TaskCard";

const HomePage: React.FC = () => {
  const { tasks, addTask } = useTaskContext();
  const [showModal, setShowModal] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [priority, setPriority] = useState("Normal");
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [selectedCategoryDropdown, setSelectedCategoryDropdown] =
    useState<string>("All");

  const filteredTasks = tasks.filter((task) => {
    if (selectedCategoryDropdown === "All") return true;
    return task.category?.name === selectedCategoryDropdown;
  });

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      addTask({
        title: newTaskTitle,
        description: newTaskDescription,
        date: selectedDate,
        category: selectedCategory,
        priority,
      });
      setShowModal(false);
      setNewTaskTitle("");
      setNewTaskDescription("");
      setSelectedDate(null);
      setSelectedCategory(null);
      setPriority("Normal");
    }
  };

  return (
    <div className={styles.homepage}>
      <header className={styles.header}>
        <h1 className={styles.title}>TodoApp</h1>
      </header>

      <main className={styles.main}>
        {tasks.length === 0 ? (
          <div className={styles.emptyState}>
            <img
              src="/images/home-img.svg"
              alt="Placeholder"
              className={styles.placeholderImage}
            />
            <h2>What do you want to do today?</h2>
            <p>Tap + to add your tasks</p>
          </div>
        ) : (
          <div className={styles.taskList}>
            <select
              className={styles.select}
              value={selectedCategoryDropdown}
              onChange={(e) => setSelectedCategoryDropdown(e.target.value)}
            >
              <option value="All">All Categories</option>
              {INITIAL_CATEGORIES.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>

            {filteredTasks.length === 0 ? (
              <p>No tasks found in the selected category.</p>
            ) : (
              filteredTasks.map((task) => (
                <TaskCard
                  category={task.category!}
                  priority={task.priority!}
                  completed={task.completed!}
                  id={task.id!}
                  title={task.title}
                  description={task.description}
                  date={task.date!}
                  key={task.id + task.title}
                />
              ))
            )}
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <Button
          className={styles.floatingButton}
          onClick={() => setShowModal(true)}
          aria-label="Add Task"
          label="+"
        />
      </footer>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className={styles.modalContent}>
            <h2>Add Task</h2>
            <input
              type="text"
              placeholder="Task title"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              className={styles.input}
            />
            <textarea
              placeholder="Description"
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
              className={styles.textarea}
            />
            <div className={styles.actions}>
              <DatePicker
                selectedDate={selectedDate}
                onDateChange={setSelectedDate}
              />
              <Button
                onClick={() => setShowCategoryModal(true)}
                label={
                  selectedCategory
                    ? `📁 ${selectedCategory.name}`
                    : "📁 Category"
                }
              />
              <Button
                className={styles.submitButton}
                onClick={handleAddTask}
                label="➤"
              />
            </div>
          </div>
          {showCategoryModal && (
            <CategorySelectorModal
              onClose={() => setShowCategoryModal(false)}
              onSelectCategory={(category) => {
                setSelectedCategory(category);
                setShowCategoryModal(false);
              }}
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
