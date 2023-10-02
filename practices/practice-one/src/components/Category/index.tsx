import { ICategory } from '@interface/category';
import { memo } from 'react';

interface CategoryProps {
  category: ICategory;
  categorySelected: string;
  onSelectCategory: (name: string) => void;
}

const Category = ({ category, categorySelected, onSelectCategory }: CategoryProps): JSX.Element => {
  const handleSelectCategory = (): void => {
    onSelectCategory(category.name);
  };

  return (
    <li
      className={`book-category-item ${category.name === categorySelected ? 'selected' : ''}`}
      data-id={category.id}
      onClick={handleSelectCategory}
      data-testid="category"
    >
      <div className="book-category-name">
        <span className={['book-category-shorthand', `book-category-${category.name}`].join(' ')}>
          {category.name.substring(0, 2)}
        </span>
        <span className="name" data-testid="category name">
          {category.name}
        </span>
      </div>
      <div className="book-category-total" data-testid="category total">
        {category.total}
      </div>
    </li>
  );
};

export default memo(Category);
