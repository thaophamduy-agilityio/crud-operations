import { ICategory } from '@interface/category';
import Category from '@components/sessions/Category';

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
      <ul className="book-category">
        {categoryList?.length ? (
          renderListCategory()
        ) : (
          <li className="book-category-item" data-id="all">
            <div className="book-category-name">
              <span className="book-category-shorthand book-category-All Books">Al</span>
              All Books
            </div>
            <div className="book-category-total">18</div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ListCategory;
