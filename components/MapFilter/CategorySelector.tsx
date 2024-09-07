import { Category } from '@/payload-types';

interface CategorySelectorProps {
  categories: Category[];
  selectedCategoryId?: number;
  onSelectCategory: (id: number | undefined) => void;
}

const CategorySelector = ({ categories, selectedCategoryId, onSelectCategory }: CategorySelectorProps) => {
  return (
    <select
      className="w-full p-4 rounded-lg"
      value={selectedCategoryId}
      onChange={(e) => onSelectCategory(Number(e.target.value) || undefined)}
    >
      <option value="">Todos</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
