import { ICategory } from '@interface/category';
import Category from '.';

interface ListCategoryProps {
  categoryList: ICategory[];
  categorySelected: string;
  handleSelectCategory: (categoryName: string) => void;
}

const ListCategory = ({
  categoryList,
  categorySelected,
  handleSelectCategory,
}: ListCategoryProps) => {
  return (
    <div className="book-category-wrapper">
      <ul className="book-category">
        {categoryList.map((category) => (
          <Category
            key={category.id}
            category={category}
            categorySelected={categorySelected}
            handleSelectCategory={handleSelectCategory}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListCategory;
