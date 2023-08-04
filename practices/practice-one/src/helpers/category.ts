import { IBook } from '@interface/book';
import { ICategory } from '@interface/category';

/**
 * Get list filter books with category name
 * @param {listBooks, name} IBook[], string
 * @returns {List books with name} IBook[]
 */
export const filterBooksByCategoryName = (
  listBooks: IBook[] | undefined,
  name: string
): IBook[] | undefined => {
  return listBooks?.filter((item) => item?.category === name);
};

/**
 * Map over two arrays of objects
 * @param {listCategories, listBooks} ICategory[], IBook[]
 * @returns {List categories with total item of category} ICategory[]
 */
export const getCategoryWithTotalItem = (
  listCategories: ICategory[] | undefined,
  listBooks: IBook[] | undefined
) =>
  listCategories?.map((category) => {
    const temp = filterBooksByCategoryName(listBooks, category.name);

    return {
      ...category,
      total: temp?.length,
    };
  });
