import { ICategory } from '@interface/category';
import { memo } from 'react';

interface CategoryProps {
  category: ICategory;
  categorySelected: string;
  onSelectCategory: (name: string) => void;
}

const Category = ({ category, categorySelected, onSelectCategory }: CategoryProps): JSX.Element => {
  const { id = 'all', name = 'All books', total = 18 } = category || {};

  const handleSelectCategory = (): void => {
    onSelectCategory(name);
  };

  return (
    <li
      className={`book-category-item ${name === categorySelected ? 'selected' : ''}`}
      data-id={id}
      onClick={handleSelectCategory}
      data-testid="category"
    >
      <div className="book-category-name">
        <span className={['book-category-shorthand', `book-category-${name}`].join(' ')}>
          {name.substring(0, 2)}
        </span>
        <span className="name" data-testid="category name">
          {name}
        </span>
      </div>
      <div className="book-category-total" data-testid="category total">
        {total}
      </div>
    </li>
  );
};

export default memo(Category);
