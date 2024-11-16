import { Category } from "../components/molecules/CategorySelector/CategorySelector";

export interface Task {
  title: string;
  description: string;
  date: Date | null;
  category: Category | null;
  priority: string;
  id?: string;
  completed?: boolean;
}
