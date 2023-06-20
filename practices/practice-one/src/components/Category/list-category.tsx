import { ICategory } from '@interface/category';

interface CategoryProps {
  categoryList: ICategory[];
  categorySelected: string;
  handleSelectCategory: (categoryName: string) => void;
}

const ListCategory = ({ categoryList, categorySelected, handleSelectCategory }: CategoryProps) => {
  return (
    <div className="book-category-wrapper">
      <ul className="book-category">
        {categoryList.map((category) => (
          <li
            key={category.id}
            className={
              category.categoryName === categorySelected
                ? 'book-category-item selected'
                : 'book-category-item'
            }
            data-id={category.id}
            onClick={() => handleSelectCategory(`${category.categoryName}`)}
          >
            <span
              className={['book-category-shorthand', `book-category-${category.categoryName}`].join(
                ' '
              )}
            >
              {JSON.stringify(category.categoryName).slice(1, 3)}
            </span>
            {category.categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCategory;
