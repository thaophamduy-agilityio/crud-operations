import { IBook } from '@interface/book';

export const filterListByCategories = (listBooks: IBook[] | undefined, categoryName: string) => {
  return listBooks?.filter((item) => item?.categoryName === categoryName);
};
