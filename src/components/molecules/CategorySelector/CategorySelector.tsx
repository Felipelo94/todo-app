import React, { useState } from "react";
import { Plus } from "lucide-react";

import styles from "./CategorySelector.module.scss";
import Button from "../../atoms/Button/Button";

export interface Category {
  id: number;
  name: string;
  styleKey: keyof typeof styles;
}

export interface CategorySelectorModalProps {
  onClose: () => void;
  onSelectCategory: (category: Category) => void;
}

export const INITIAL_CATEGORIES: Category[] = [
  { id: 1, name: "Grocery", styleKey: "categoryGrocery" },
  { id: 2, name: "Work", styleKey: "categoryWork" },
  { id: 3, name: "Sport", styleKey: "categorySport" },
  { id: 4, name: "Design", styleKey: "categoryDesign" },
  { id: 5, name: "University", styleKey: "categoryUniversity" },
  { id: 6, name: "Social", styleKey: "categorySocial" },
  { id: 7, name: "Music", styleKey: "categoryMusic" },
  { id: 8, name: "Health", styleKey: "categoryHealth" },
  { id: 9, name: "Movie", styleKey: "categoryMovie" },
  { id: 10, name: "Home", styleKey: "categoryHome" },
];

const CategorySelectorModal: React.FC<CategorySelectorModalProps> = ({
  onClose,
  onSelectCategory,
}) => {
  const [showNewCategoryInput, setShowNewCategoryInput] =
    useState<boolean>(false);
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>(INITIAL_CATEGORIES);

  const handleCategorySelect = (category: Category): void => {
    onSelectCategory(category);
    onClose();
  };

  const handleCreateCategory = (): void => {
    if (newCategoryName.trim()) {
      const newCategory: Category = {
        id: Math.max(...categories.map((c) => c.id)) + 1,
        name: newCategoryName.trim(),
        styleKey: "categoryDefault",
      };

      setCategories((prevCategories) => [...prevCategories, newCategory]);
      onSelectCategory(newCategory);
      onClose();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewCategoryName(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && newCategoryName.trim()) {
      handleCreateCategory();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <h2>Choose Category</h2>

        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category)}
              className={styles[category.styleKey]}
              type="button"
              aria-label={`Select ${category.name} category`}
            >
              <span>{category.name}</span>
            </button>
          ))}

          <Button
            onClick={() => setShowNewCategoryInput(true)}
            className={styles.addCategoryButton}
            aria-label="Create new category"
          >
            <Plus className={styles.plusIcon} />
            <span>Create New</span>
          </Button>
        </div>

        <Button className={styles.mainButton} onClick={onClose}>
          Add Category
        </Button>

        {showNewCategoryInput && (
          <div
            className={styles.newCategoryModal}
            onClick={() => setShowNewCategoryInput(false)}
          >
            <div
              className={styles.modalContent}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <h3>Create New Category</h3>
              <input
                type="text"
                value={newCategoryName}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Category name"
                className={styles.input}
                autoFocus
                maxLength={50}
                aria-label="New category name"
              />
              <div className={styles.buttonGroup}>
                <Button
                  className={styles.createButton}
                  onClick={handleCreateCategory}
                  disabled={!newCategoryName.trim()}
                >
                  Create
                </Button>
                <Button
                  className={styles.cancelButton}
                  onClick={() => setShowNewCategoryInput(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategorySelectorModal;
