import { IBook } from '@interface/book';
import { CATEGORIES } from '@constants/categories';

export const filterListByCategories = (listBooks: IBook[], categoryName: string) => {
  if (categoryName) {
    return listBooks.filter((item) => item?.categoryName === categoryName);
  } else {
    return listBooks;
  }
};
