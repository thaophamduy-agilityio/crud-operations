import { ICategory } from '@interface/category';
import Category from '../Category';
import { CATEGORY_MESSAGES } from '@constants/error-messages';

interface ListCategoryProps {
  categoryList: ICategory[] | undefined;
  categorySelected: string;
  onSelectCategory: (categoryName: string) => void;
}

const ListCategory = ({ categoryList, categorySelected, onSelectCategory }: ListCategoryProps) => {
  return (
    <div className="book-category-wrapper">
      <ul className="book-category">
        {!categoryList?.length ? (
          <li className="book-category-item not-found">{CATEGORY_MESSAGES.NO_CATEGORY}</li>
        ) : (
          categoryList?.map((category) => (
            <Category
              key={category.id}
              category={category}
              categorySelected={categorySelected}
              handleSelectCategory={onSelectCategory}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default ListCategory;
