import { ICategory } from '@interface/category';

interface CategoryProps {
  category: ICategory;
  categorySelected: string;
  handleSelectCategory: (categoryName: string) => void;
}

const Category = ({ category, categorySelected, handleSelectCategory }: CategoryProps) => {
  return (
    <li
      className={
        category.categoryName === categorySelected
          ? 'book-category-item selected'
          : 'book-category-item'
      }
      data-id={category.id}
      onClick={() => handleSelectCategory(`${category.categoryName}`)}
    >
      <div className="book-category-name">
        <span
          className={['book-category-shorthand', `book-category-${category.categoryName}`].join(
            ' '
          )}
        >
          {JSON.stringify(category.categoryName).slice(1, 3)}
        </span>
        {category.categoryName}
      </div>
      <div className="book-category-total">{`${category.total}`}</div>
    </li>
  );
};

export default Category;
