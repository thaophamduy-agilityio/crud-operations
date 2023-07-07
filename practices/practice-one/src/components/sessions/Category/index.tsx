import { ICategory } from '@interface/category';

interface CategoryProps {
  category: ICategory;
  categorySelected: string;
  onSelectCategory: (name: string) => void;
}

const Category = ({ category, categorySelected, onSelectCategory }: CategoryProps) => {
  const { id, name, total } = category || {};

  const handleSelectCategory = () => {
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
          {JSON.stringify(name).slice(1, 3)}
        </span>
        {name}
      </div>
      <div className="book-category-total">{`${total}`}</div>
    </li>
  );
};

export default Category;
