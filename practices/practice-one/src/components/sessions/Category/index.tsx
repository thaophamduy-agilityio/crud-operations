import { ICategory } from '@interface/category';

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
      className={name === categorySelected ? 'book-category-item selected' : 'book-category-item'}
      data-id={id}
      onClick={handleSelectCategory}
    >
      <div className="book-category-name">
        <span className={['book-category-shorthand', `book-category-${name}`].join(' ')}>
          {name.substring(0, 2)}
        </span>
        {name}
      </div>
      <div className="book-category-total">{total}</div>
    </li>
  );
};

export default Category;
