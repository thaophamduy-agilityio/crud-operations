import { ICategory } from '@interface/category';
import Category from '@components/sessions/Category';
import { CATEGORY_MESSAGES } from '@constants/error-messages';

interface ListCategoryProps {
  categoryList: ICategory[] | undefined;
  categorySelected: string;
  onSelectCategory: (name: string) => void;
}

const ListCategory = ({
  categoryList,
  categorySelected,
  onSelectCategory,
}: ListCategoryProps): JSX.Element => {
  const renderListCategory = (): JSX.Element[] | undefined => {
    return categoryList?.map((category) => (
      <Category
        key={category.id}
        category={category}
        categorySelected={categorySelected}
        onSelectCategory={onSelectCategory}
      />
    ));
  };

  return (
    <div className="book-category-wrapper">
      {categoryList?.length ? (
        <ul className="book-category">{renderListCategory()}</ul>
      ) : (
        <p className="book-item not-found">{CATEGORY_MESSAGES.NO_CATEGORY}</p>
      )}
    </div>
  );
};

export default ListCategory;
