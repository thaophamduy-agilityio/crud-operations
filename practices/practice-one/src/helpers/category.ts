import { IBook } from '@interface/book';

export const filterListByCategories = (listBooks: IBook[], categoryName: string) => {
  return listBooks.filter((item) => item?.categoryName === categoryName);
};
